
// lib/api.js
const API_BASE_URL = 'https://pjct-e-commerce-back.onrender.com/api';

export async function fetchGames() {
  const response = await fetch(`${API_BASE_URL}/game/`);
  if (!response.ok) {
    throw new Error(`Failed to fetch games: ${response.status}`);
  }
  const data = await response.json();
  return Array.isArray(data.games) ? data.games : [data.games];
}

export async function fetchMarks() {
  const response = await fetch(`${API_BASE_URL}/mark/`);
  if (!response.ok) {
    throw new Error(`Failed to fetch marks: ${response.status}`);
  }
  const data = await response.json();
  return data.marks;
}

export async function fetchCategories() {
  const response = await fetch(`${API_BASE_URL}/category/`);
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status}`);
  }
  const data = await response.json();
  return data.categories;
}