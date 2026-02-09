import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid() {
  const [pageNumber, setPageNumber] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const skip = (pageNumber - 1) * 10;
      const res = await fetch(
        `https://dummyjson.com/products?skip=${skip}&limit=10`
      );
      const data = await res.json();
      setProducts(data.products);
    }

    getData();
  }, [pageNumber]);

  return (
    <section className="product-section">
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} data={p} />
        ))}
      </div>

      <div className="pagination">
        {pageNumber > 1 && (
          <button
            className="pagination-btn"
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>
        )}

        <span className="pagination-page">Page {pageNumber}</span>

        <button
          className="pagination-btn"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default ProductGrid;
