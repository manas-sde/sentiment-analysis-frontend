const ReviewsTable = ({ reviews }) => {
    return (
      <table className="table table-striped table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>Review</th>
            <th>Sentiment</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {reviews.length > 0 ? (
            reviews.map((r, index) => (
              <tr key={index}>
                <td>{r.review}</td>
                <td>{r.reviewSentiment}</td>
                <td>{r.reviewSentimentScore}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };
  
  export default ReviewsTable;
  