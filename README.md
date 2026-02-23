# Gradiator

Gradiator is a lightweight React Native (Expo) app for climbers to convert and compare climbing difficulty grades across international grading systems. Slide to select a grade and view equivalent grades in several systems — helpful for planning climbs, logging routes, or learning international grade equivalents.

## Features

- Convert between common climbing grade systems (French, YDS, UIAA, Ewbank, Polish, Brazilian, Nordic)
- Interactive vertical slider for fast grade selection
- Pick which grading systems are shown and compare top/bottom choices
- Small, offline grade table stored in the app (`src/data/grades.ts`)

## Quick start

Prerequisites: Node.js and a package manager (`npm` or `yarn`). For native runs, install the Expo CLI or use Expo Dev Client.

Install dependencies:

```bash
npm install
# or
yarn
```

Run the app in development:

```bash
npm start
# or
npm run android
# or
npm run ios
# or
npm run web
```

## Project layout (important files)

- `App.tsx` — app entry, font loading and splash logic
- `src/screens/HomeScreen.tsx` — main UI: slider and `GradeCard`
- `src/components/GradeCard.tsx` — displays selected grade & equivalents
- `src/components/VerticalSlider.*` — grade selection control
- `src/data/grades.ts` — canonical grade mapping table used for conversions
- `src/data/systems.ts` — list of supported grading systems

If you want to change or extend grade mappings, edit `src/data/grades.ts`.

## Contributing

Contributions, bug reports and pull requests are welcome. Suggested workflow:

1. Fork the repo and create a feature branch
2. Add tests / verify the app runs in Expo
3. Open a pull request with a clear description of changes

If you'd like, I can add a `LICENSE` file (MIT) and example screenshots for the README.

## License

Repository metadata and licensing not included here — tell me if you want an `MIT` or other license file added.
