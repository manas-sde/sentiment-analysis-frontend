import { useState } from "react";
import { analyzeReviews } from "../api/api";
import ReviewsTable from "../components/ReviewsTable";

const Home = () => {
  const [reviews, setReviews] = useState([""]);
  const [results, setResults] = useState([]);

  const handleAddReview = () => {
    if (reviews.length < 10) setReviews([...reviews, ""]);
  };

  const handleChange = (index, value) => {
    const updatedReviews = [...reviews];
    updatedReviews[index] = value;
    setReviews(updatedReviews);
  };

  const handleAnalyze = async () => {
    if (reviews.some((r) => r.trim() === "")) return alert("Fill all reviews!");
    const response = await analyzeReviews(reviews);
    setResults(response.responses);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Analyze Review Sentiments</h2>
      {reviews.map((review, index) => (
        <input
          key={index}
          type="text"
          className="form-control my-2"
          value={review}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder="Enter review"
        />
      ))}
      <button className="btn btn-success me-2" onClick={handleAddReview} disabled={reviews.length >= 10}>
        Add More Review
      </button>
      
      <button className="btn btn-primary me-2" onClick={handleAnalyze}>Analyze Sentiments</button>

      {results.length > 0 && <ReviewsTable reviews={results} />}

    </div>
  );
};

export default Home;
