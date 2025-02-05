import { useEffect, useState } from "react";
import ProductCards from "../components/shop/ProductCards";
import ShopFilters from "../components/shop/ShopFilters";
import { useFetchAllProductsQuery } from "../features/products/productsAPI";

const filters = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
  priceRanges: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "Under $100", min: 50, max: 100 },
    { label: "Under $200", min: 100, max: 200 },
    { label: "$200 and above", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);

  const { category, color, priceRange } = filtersState;
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);

  const { data: { products = [], totalPages, totalProducts } = {}, error, isLoading} = useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: productPerPage,
  });

  // Clear the filters
  const clearFIlters = () => {
    setFiltersState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  const handlePageChange = (pageNumber) => {
    if(pageNumber>0 && pageNumber <= totalPages){
      setCurrentPage(pageNumber)
    }
  }

  const startProduct = (currentPage-1) * productPerPage+1;
  const endProduct = startProduct + products.length-1;

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error while loading products</div>

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shop All You Want</h2>
        <p className="section__subheader">
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today!
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div>
            <ShopFilters
              filters={filters}
              filtersState={filtersState}
              setFiltersState={setFiltersState}
              clearFIlters={clearFIlters}
            />
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Showing {startProduct} to {endProduct} of {totalProducts} products.
            </h3>
            <ProductCards products={products} />

            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <button onClick={()=> handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">Previous</button>
              {
                [...Array(totalPages)].map((_, index) => {
                  <button onClick={()=> handlePageChange(index + 1)} key={index} className={`px-4 py-2 ${currentPage === index+1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-md mx-1` }>{index+1}</button>
                })
              }
              <button onClick={()=> handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">Next</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
