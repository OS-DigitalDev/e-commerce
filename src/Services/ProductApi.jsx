

// function ProductApi(){
//     async function SearchProduct(query){
//         let data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
//         let jsonData = await data.json();
//         return jsonData.products;
//     }

//     return SearchProduct;
// }

// export default ProductApi;

export async function searchProducts(query) {
  if (!query || query.trim().length === 0) return [];

  const res = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const data = await res.json();
  return data.products || [];
}
