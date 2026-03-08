const YOUTUBE_SEARCH_URL = 'https://www.youtube.com/results?search_query=';

function performSearch(forcedQuery = null) {
  const input = document.getElementById('searchQuery');
  const query = forcedQuery || input.value.trim();

  if (query) {
    if (query.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/)) {
      void chrome.tabs.create({ url: query });
    } else {
      const formattedQuery = encodeURIComponent(query).replace(/%20/g, '+');
      void chrome.tabs.create({ url: YOUTUBE_SEARCH_URL + formattedQuery });
    }

    window.close();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchQuery');
  const button = document.getElementById('searchBtn');

  // Tiny timeout helps ensure Chrome auto-focus always works properly on popups
  setTimeout(() => input.focus(), 50);

  button.addEventListener('click', () => performSearch());
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch();
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "focusSearch") {
    const input = document.getElementById('searchQuery');
    if (input) input.focus();
  }
});
