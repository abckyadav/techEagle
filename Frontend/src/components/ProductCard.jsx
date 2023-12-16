import { FaShoppingCart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      {/* Product Image */}
      <img
        src={"product.image"}
        alt={"product.name"}
        className="w-full h-48 object-cover"
      />

      {/* Product Details */}
      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {"product.name"}
        </h2>

        {/* Price and Quantity */}
        <div className="mt-2 text-gray-600">
          <p className="text-lg font-bold">₹{"product.price"}</p>
          <p>Quantity: {"product.quantity"}</p>
        </div>

        {/* Add to Cart Button with Cart Icon */}
        <div className="flex items-center justify-center">
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-full flex items-center justify-center">
            <FaShoppingCart className="mr-2" />
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
