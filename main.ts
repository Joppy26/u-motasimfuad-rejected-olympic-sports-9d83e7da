import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Synchronized spreadsheet diving: two athletes, one shared workbook, gold for the cleanest pivot table, instant disqualification for crying at a circular reference.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
