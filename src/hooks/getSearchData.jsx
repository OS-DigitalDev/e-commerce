import { useEffect, useRef, useState } from "react";
import { searchProducts } from "../Services/ProductApi";

function useProductSearch(query, delay = 500) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!query.trim()) {
      setResults([]);
      return;
    }

    timerRef.current = setTimeout(async () => {
      try {
        setLoading(true);
        const products = await searchProducts(query);
        setResults(products);
      } catch (err) {
            console.error(err);
            setResults([]);
            }

      finally {
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [query, delay]);

  return { results, loading };
}

export default useProductSearch;
