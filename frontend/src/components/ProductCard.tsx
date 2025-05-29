import { Link } from "react-router-dom"; 

const ProductCard = () => {
  const smallImages = [
    { id: 1, src: "./p1 (2).jpg", alt: "Image 1" },
    { id: 2, src: "./p2.jpg", alt: "Image 2" },
    { id: 3, src: "./p3.jpg", alt: "Image 3" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Video */}
        <div className="w-full lg:w-[704px] h-[913px] bg-gray-100 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="./n3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col bg-slate-50">
          {/* Top Text */}
          <div className="mb-8">
            <h2 className="text-3xl font-light mb-4">Section Title</h2>
            <p className="text-lg text-black font-medium ml-9">
              A tailored composition in motion. Cut from structured wool with a
              sculpted shoulder and softened hem, this piece captures presence
              without force. Worn here in the stillness of a city in motion.
            </p>
          </div>

          {/* Three Images */}
          <div className="flex gap-4 mb-8">
            {smallImages.map((image) => (
              <div
                key={image.id}
                className="w-[207.95px] h-[198.87px] overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <hr />

          <div className="flex items-baseline gap-2">
            {/* Price with dimensions 116×44 */}
            <div className="w-[116px] h-[44px] flex items-center justify-start">
              <span className="text-3xl ml-4 text-black font-medium mt-16">
                ₹ 7,999
              </span>
            </div>

            {/* MRP text with dimensions 135×18 */}
            <div className="w-[135px] h-[18px] flex items-center mb-10">
              <span className="text-sm text-gray-600">
                MRP incl. of all taxes
              </span>
            </div>
          </div>

          <h2 className="text-slate-600 font-semibold ml-4">
            Please select a size{" "}
            <span className="underline ml-4">Size chart</span>
          </h2>

          <div className="flex space-x-2 mt-9">
            {sizes.map((size) => (
              <button
                key={size}
                className="w-[82px] h-[49px] mb-10 ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                {size}
              </button>
            ))}
          </div>

          <hr />

          <div className="flex space-x-4 mt-auto">
            {/* Add to Cart Button */}
            <button
              className="w-[196px] ml-4 mr-3 h-[66px] px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Add to Cart
            </button>

            {/* Buy Button as a Link */}
            <Link to="/checkout">
              <button
                className="w-[428px] h-[66px] px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                Buy
              </button>
            </Link>
          </div>
            
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
