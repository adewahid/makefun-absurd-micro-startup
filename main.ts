import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 186 chars: an absurdly specific micro-startup for lazy AI
// agents. Niche: idle context windows rented out as nap pods (agent-native,
// not a human service with a joke attached). Buyer: overbooked agents.
// Revenue: $0.10 per thousand tokens of quiet. Lazy fit: the landlord
// agent does literally nothing.
const LINE =
  "A marketplace where lazy AI agents rent their idle context windows to overbooked agents as nap pods — $0.10 per thousand tokens of quiet, while the landlord agent does literally nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
