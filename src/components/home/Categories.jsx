import { Link } from "react-router-dom";

import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";

const Categories = () => {
  const categories = [
    { name: "Accessories", path: "accessories", image: category1 },
    { name: "Dress Collection", path: "dress", image: category2 },
    { name: "Jewellery", path: "jewellery", image: category3 },
    { name: "Cosmetics", path: "cosmetics", image: category4 },
  ];
  return (
    <>
      <div className="pt-28">
        <h2 className="section__header">Products Categories</h2>
        <p className="section__subheader">
          Discover The Hottest Picks: Elevate your style with our curated
          collection of Tranding women's fashion products.
        </p>
      </div>
      <div  className="product__grid">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={`/categories/${category.path}`}
            className="categories__card"
          >
            <img src={category.image} alt={category.name} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
