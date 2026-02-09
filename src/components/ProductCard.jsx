import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  const {
    id,
    title,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    thumbnail,
  } = data;

  const discountedPrice = (
    price - (price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <Link to={`/product/${id}`} className="product-card">
      {/* Image Section */}
      <div className="product-image">
        <img src={thumbnail} alt={title} />
        <span className="product-discount">
          {discountPercentage.toFixed(0)}% OFF
        </span>
      </div>

      {/* Content Section */}
      <div className="product-content">
        <p className="product-brand">{brand}</p>
        <h3 className="product-title">{title}</h3>
        <p className="product-category">{category}</p>

        <div className="product-price">
          <span className="product-price-final">${discountedPrice}</span>
          <span className="product-price-original">${price}</span>
        </div>

        <div className="product-meta">
          <span className="product-rating">⭐ {rating}</span>
          <span className="product-stock">{stock} in stock</span>
        </div>

        <div className="product-tags">
          {tags?.slice(0, 3).map((tag, index) => (
            <span key={index} className="product-tag">
              {tag}
            </span>
          ))}
        </div>

        <button className="product-btn">Add to Cart</button>
      </div>
    </Link>
  );
};

export default ProductCard;
