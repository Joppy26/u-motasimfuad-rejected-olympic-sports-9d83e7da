import { mkdirSync, writeFileSync } from "node:fs";
// Four hours, one ticket, zero patience: the podium is a waiting room.
const LINE = "Competitive waiting-room sitting: athletes hold the same numbered ticket for four hours, gold to whoever complains least, bronze to the one who asked 'how much longer?'.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
