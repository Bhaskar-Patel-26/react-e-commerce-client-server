import { Link } from "react-router-dom";
import img from '../../assets/instagram-6.jpg';
import RatingStars from "../RatingStars";

const SingleProduct = () => {
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Product Details</h2>
        <div className="section__subheader space-x-2">
            <span className="hover:text-primary"><Link to="/">home</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className="hover:text-primary"><Link to="/">shop</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className="hover:text-primary">Product Name</span>
        </div>
      </section>

      <section className="section__container">
        <div className="flex flex-col items-center md:flex-row gap-8">
            {/* Product Image */}
            <div className="md:w-1/2 w-full">
                <img src={img} alt="" className="rounded-2xl w-full h-auto" />
            </div>

            <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-semibold mb-4">Product Name</h3>
                <p className="text-xl text-primary mb-4">$100 <s>$130</s></p>
                <p className="text-gray-400 mb-4">This is an product description</p>

                {/* Additional product info */}
                <div>
                    <p><strong>Category: </strong>accessories</p>
                    <p><strong>Color: </strong>beige</p>
                    <div className="flex gap-1 items-center">
                        <strong>Rating:</strong>
                        <RatingStars rating={"4"} />
                    </div>
                </div>
                <button className="btn mt-6">Add to Cart</button>
            </div>
        </div>
      </section>

      {/* Reviews */}
      {/* TODO: Work with review when will have API */}
      <section className="section__container">
        Reviews Here
      </section>
    </>
  );
};

export default SingleProduct;
