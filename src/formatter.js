// src/formatter.js
function formatEventDetails(title, category) {
    return `[${category.toUpperCase()}] ${title.trim()}`;
}
module.exports = { formatEventDetails };