import { useEffect, useState } from "react";
import productsData from "../data/products.json";
import ProductCards from "../components/shop/ProductCards";
import ShopFilters from "../components/shop/ShopFilters";

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
  const [products, setProducts] = useState(productsData);
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  // Filtering function
  const applyFilters = () => {
    let filteredProducts = productsData;

    // Filter by category
    if (filtersState.category && filtersState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filtersState.category
      );
    }

    // Filter by color
    if (filtersState.color && filtersState.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filtersState.color
      );
    }

    // Filter by price range
    if (filtersState.priceRange) {
      const [minPrice, maxPrice] = filtersState.priceRange
        .split("-")
        .map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      console.log(minPrice, maxPrice, filteredProducts)
    }
    
    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filtersState]);

  // Clear the filters
  const clearFIlters = () => {
    setFiltersState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

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
            <h3 className="text-xl font-medium mb-4">Products Available: {products.length}</h3>
            <ProductCards products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
