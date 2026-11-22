# Reincarnation Through Karma — rebuilt CYOA

## Files
- `index.html` — interactive life builder.
- `editor.html` — add, edit, and delete sections and choices; change costs and selection rules.
- `guide.html` — cleaned-up rules and stat reference.
- `data.js` — editable source content used by the builder.
- `app.js` / `styles.css` — application behavior and styling.
- `Reincarnation Through Karma - cleaned.txt` — cleaned narrative source.

## Run it
Open `index.html` in a modern browser. The builder and editor work without a server. Browser local storage keeps your edits and selections on that device/browser.

## Editing and portability
Use Content Editor to revise text and assign point costs. Use Export content JSON to back up the content, or Save build / Export to save a build. Import a JSON build from the builder to restore it. Browser local storage does not automatically sync between devices; export/import is the portable workflow.

## Important source gaps preserved
The supplied source gives the karma tier values and a default stat allocation of 20, but does not assign costs to most other options. Those options therefore default to zero/Free rather than receiving invented prices. Assign the intended prices in the editor.
