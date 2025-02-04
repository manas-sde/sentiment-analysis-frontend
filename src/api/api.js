const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

export const analyzeReviews = async (reviews) => {
  const response = await fetch(`${BASE_URL}/sentiment-analysis`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reviews }),
    
  });
  return response.json();
};

export const fetchReviews = async (searchQuery = "", offset = 0, limit = 10) => {
  const url = new URL(`${BASE_URL}/sentiment-analysis`);
  if (searchQuery) url.searchParams.append("searchQuery", searchQuery);
  url.searchParams.append("offset", offset);
  url.searchParams.append("limit", limit);

  const response = await fetch(url);
  return response.json();
};
