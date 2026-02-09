

const LoadingSkeleton = ({ count = 10 }) => {
  return (
    <div className="product-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-image"></div>

          <div className="skeleton-content">
            <div className="skeleton-line short"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line small"></div>

            <div className="skeleton-price"></div>
            <div className="skeleton-btn"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
