import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";
import LoadingSkeleton from "../components/LoadingSkeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    getData();
  }, [id]);

  if (!product) {
    return <LoadingSkeleton/>;
  }

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <section className="pdp">
      <div className="pdp-container">
        {/* LEFT IMAGE */}
        <div className="pdp-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="pdp-content">
          <p className="pdp-brand">{product.brand}</p>
          <h1 className="pdp-title">{product.title}</h1>
          <p className="pdp-category">{product.category}</p>

          <div className="pdp-rating">
            ⭐ {product.rating}
            <span>({product.stock} in stock)</span>
          </div>

          <div className="pdp-price">
            <span className="pdp-price-final">₹{discountedPrice}</span>
            <span className="pdp-price-original">₹{product.price}</span>
            <span className="pdp-discount">
              {product.discountPercentage.toFixed(0)}% OFF
            </span>
          </div>

          <p className="pdp-description">{product.description}</p>

          <div className="pdp-tags">
            {product.tags?.map((tag, index) => (
              <span key={index} className="pdp-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="pdp-actions">
            <button className="pdp-btn primary">Add to Cart</button>
            <button className="pdp-btn secondary">Buy Now</button>
          </div>

          <div className="pdp-info">
            <p>🚚 {product.shippingInformation}</p>
            <p>🛡 {product.warrantyInformation}</p>
            <p>↩ {product.returnPolicy}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
