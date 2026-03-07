# YouTube Searcher Extension

A quick, powerful Manifest V3 Chrome Extension to search YouTube instantly through keyboard shortcuts, context menus, and a dedicated popup.

## Features

- **Popup Search Panel:** Click the extension icon to instantly type and execute a YouTube Search.
- **Context Menu Integration:** Select text on any webpage, right-click, and choose "Search on YouTube".
- **Global Keyboard Shortcut:** Press `Ctrl+Y` to immediately launch a dedicated, full-page search tab or pull an existing one right to the front.
- **Smart Window Tracking:** If you trigger a search by shortcut, it won't flood you with duplicate tabs. Instead, it locates your existing search tab, focuses its window, and selects the text field for you!

## Installation

Currently, this extension runs in Chrome's Developer Mode.

1. Clone or download this project to a directory.
2. Open Google Chrome.
3. In the URL bar, go to `chrome://extensions/`.
4. Turn on the **Developer mode** toggle in the top-right corner.
5. Click the **Load unpacked** button.
6. Select the folder containing `manifest.json`.

## Usage

- Click the extension icon to search instantly in the popup.
- Select text on any webpage, right-click to send the query.
- Use `Ctrl+Y` when needing an immediate standalone console.

**Note on Shortcut Management:** Need to personalize the keybind? Navigate to `chrome://extensions/shortcuts` to reassign the default `Ctrl+Y` action to any preferred combination.

## Privacy & Security

This extension only demands the minimal permissions required to accomplish its search workflow (`tabs`, `scripting`, and `contextMenus`). We operate a tight Content Security Policy (CSP) minimizing outside risks.