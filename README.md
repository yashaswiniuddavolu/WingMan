# Wingman

Wingman is a browser extension that helps you find the cheapest and most convenient flights by searching across multiple aggregators in one click.

## Features

- **Multi-Search**: Open search results on Wego, Skyscanner, Kayak, Google Flights, and more simultaneously.
- **Smart Inputs**: Auto-complete for airports (focused on India + major international hubs).
- **History**: Quickly access your recent searches.
- **Simple UI**: Clean, elegant interface built with React and Tailwind CSS.

## Output
<img width="1919" height="969" alt="Screenshot 2026-02-02 103812" src="https://github.com/user-attachments/assets/cf72d5e7-3342-4643-974a-a683d2c05178" />
<img width="1915" height="919" alt="Screenshot 2026-02-02 104657" src="https://github.com/user-attachments/assets/2d265fae-9fd5-4ae0-a609-ff2e15285e12" />
<img width="1919" height="903" alt="Screenshot 2026-02-02 104746" src="https://github.com/user-attachments/assets/f1b6e5f5-0f02-46c9-b499-f47c295b4400" />
<img width="1919" height="916" alt="Screenshot 2026-02-02 104841" src="https://github.com/user-attachments/assets/a3ce302a-9f4e-44b5-bfeb-c8e60d518875" />
<img width="1919" height="906" alt="Screenshot 2026-02-02 104931" src="https://github.com/user-attachments/assets/9ea5dd46-8cc8-4458-88d5-0f1371d642e1" />
<img width="1919" height="915" alt="Screenshot 2026-02-02 105052" src="https://github.com/user-attachments/assets/4c64c7ca-d215-4f16-8863-e6d903364945" />

## Development

### Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server (for UI testing):
   ```bash
   npm run dev
   ```

### Build for Production

1. Run build command:
   ```bash
   npm run build
   ```
2. The output will be in the `dist` folder.

### Load Extension in Chrome

1. Open `chrome://extensions/`.
2. Enable "Developer mode" (top right).
3. Click "Load unpacked".
4. Select the `dist` folder.

## Tech Stack

- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Vite

## License

MIT
