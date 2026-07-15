import fs from "node:fs/promises";
import vm from "node:vm";

export async function loadBusinesses() {
  const source = await fs.readFile(new URL("../assets/data.js", import.meta.url), "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context);
  const businesses = context.window.BUSINESSES;
  if (!Array.isArray(businesses) || businesses.length !== 30) {
    throw new Error(`Expected 30 business records, received ${businesses?.length ?? 0}`);
  }
  return businesses;
}

