# Reincarnation Through Karma — rebuilt CYOA

## Files
- `index.html` — interactive life builder.
- `editor.html` — add, edit, and delete sections and choices; change costs and selection rules.
- `guide.html` — cleaned-up rules and stat reference.
- `data.js` — editable source content used by the builder.
- `app.js` / `styles.css` — application behavior and styling.
- `Reincarnation Through Karma.txt` — choices source.

## Run it
Open `index.html` in a modern browser. The builder and editor work without a server. On the Builder page, open a main category (Background, World, Physique, or Powers) to reveal its related sections, then open a section to read its explanation and reveal its choices. Open **Allocate Stats** and enter allocated points directly in each attribute's number box. **Appearance Maxing** contains free-text ethnicity and appearance accordions with constitution/strength requirements and individual randomizers, plus a body randomizer. Buy an extra unspent attribute point with karma or sell an unspent attribute point for karma using the adjacent buttons. Selected numeric physique modifiers change final stat values and stack multiplicatively; modified Constitution sets the allocation cap for other stats. The footer shows remaining karma and unspent attribute points. Content edits, appearance notes, and attribute allocations are stored in browser local storage. Use **Save build** or **Export** to save selected choices, stats, appearance notes, and purchased/sold attribute points as a JSON file for later import.

## Editing and portability
Use Content Editor to revise text and assign point costs. Each choice can also list required and incompatible choice IDs. Enter comma-separated IDs in the corresponding fields; every required choice must be selected, while incompatibility works in either direction. The editor offers existing choice IDs as input suggestions. In the builder, unavailable choices remain visible but dimmed, with the reason shown on the card. The Summary includes expandable choice descriptions and a Build Form with copyable choice-title and choice-ID text plus an ID-based import field. Use Export content JSON to back up the content, or Save build / Export to save a build. Import a JSON build from the builder to restore it. Browser local storage does not automatically sync between devices; export/import is the portable workflow.

## Important source gaps preserved
The supplied source gives the karma tier values and a default stat allocation of 20, but does not assign costs to most other options. Those options therefore default to zero/Free rather than receiving invented prices. Assign the intended prices in the editor.
