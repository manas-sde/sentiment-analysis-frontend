import { useState, useEffect } from "react";
import { fetchReviews } from "../api/api";
import ReviewsTable from "../components/ReviewsTable";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const fetchResults = async () => {
    const response = await fetchReviews(searchQuery, offset, limit);
    setResults(response.reviews);
  };

  useEffect(() => {
    fetchResults();
  }, [offset]);

  return (
    <div className="container mt-4">
      <h2>Search Reviews</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search reviews..."
        />
        <button className="btn btn-primary" onClick={() => { setOffset(0); fetchResults(); }}>Search</button>
      </div>
      <ReviewsTable reviews={results} />
      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-primary" onClick={() => setOffset(Math.max(0, offset - limit))} disabled={offset === 0}>
          Previous
        </button>
        <button className="btn btn-outline-primary" onClick={() => setOffset(offset + limit)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Search;
