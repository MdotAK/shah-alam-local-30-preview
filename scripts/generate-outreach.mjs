import fs from "node:fs/promises";
import path from "node:path";
import { loadBusinesses } from "./load-businesses.mjs";

const categoryAngles = {
  Food: "make the menu, location and table enquiry path easier to discover",
  Beauty: "turn service discovery and appointment enquiries into a clearer mobile journey",
  Auto: "let drivers describe their vehicle issue before calling or visiting",
  Services: "collect quote specifications with less back-and-forth",
  Retail: "help customers brief an arrangement and confirm delivery details",
  Pets: "help customers check the right supplies before making the trip",
  Classes: "make trial-class enquiries clearer for parents and new students",
};

const csvCell = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
const businesses = await loadBusinesses();

const drafts = businesses.map((business, index) => {
  const mobile = business.phone.startsWith("601");
  const angle = categoryAngles[business.category];
  const previewUrl = `https://mdotak.github.io/shah-alam-local-30-preview/site.html?id=${business.id}`;
  return {
    reference: `SITE-${String(index + 1).padStart(2, "0")}`,
    businessName: business.name,
    category: business.category,
    area: business.area,
    publicPhone: `+${business.phone}`,
    recommendedChannel: mobile ? "WhatsApp draft" : "Call script",
    state: "draft_only",
    externalSendingEnabled: false,
    founderApprovalRequired: true,
    valueAngle: `${business.name} could use a focused one-page site to ${angle}.`,
    initialDraft: `Hi, I’m Mak from NorthArc. I prepared an unofficial website concept for ${business.name} based only on public information. It is designed to ${angle}. May I send you the private preview for your feedback? There is no obligation.`,
    followUpDraft: `Hi, just following up on the website concept prepared for ${business.name}. If the direction is useful, I can revise the business details and imagery with you. The one-page site is RM600, excluding domain and hosting. Would a short 15-minute discussion be convenient?`,
    callOpener: `Hi, may I speak with the person responsible for ${business.name}? I’m Mak from NorthArc. I prepared a website concept to ${angle}, and I would like permission to share it for feedback.`,
    qualificationQuestions: [
      "Do you currently have an official website or preferred online profile?",
      "Which services or products should customers notice first?",
      "Who should confirm the phone, address, hours and business photos?",
      "If the concept is useful, would you prefer Zoom or a physical meeting?",
    ],
    commercialBoundary: "RM600 one-page website; domain and hosting excluded; changes scoped after owner review.",
    previewUrl,
    researchUrl: business.source,
  };
});

await fs.mkdir("data", { recursive: true });
await fs.writeFile("data/outreach-drafts.json", `${JSON.stringify({ generatedAt: new Date().toISOString(), count: drafts.length, outreachLocked: true, drafts }, null, 2)}\n`);

const columns = ["reference", "businessName", "category", "area", "publicPhone", "recommendedChannel", "state", "valueAngle", "initialDraft", "followUpDraft", "callOpener", "commercialBoundary", "previewUrl", "researchUrl"];
const csv = [columns.join(","), ...drafts.map((draft) => columns.map((column) => csvCell(draft[column])).join(","))].join("\n");
await fs.writeFile("data/outreach-drafts.csv", `${csv}\n`);
console.log(`Generated ${drafts.length} locked outreach drafts.`);

