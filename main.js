function performSearch() {
  const input = document.getElementById('searchQuery');
  const query = input.value.trim();

  if (query) {
    const formattedQuery = encodeURIComponent(query).replace(/%20/g, '+');
    const url = `https://www.youtube.com/results?search_query=${formattedQuery}`;

    void chrome.tabs.create({ url });
    window.close();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchQuery');
  const button = document.getElementById('searchBtn');

  input.focus();

  button.addEventListener('click', performSearch);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch();
  });
});
