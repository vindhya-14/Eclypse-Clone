import React from "react";

const ProductGrid: React.FC = () => {
  return (
    <div className="px-4 py-8 mt-20 max-w-7xl mx-auto">
      <div className="flex gap-4 mb-4">
        <div className="relative w-[883px] h-[489px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="./n2.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img
              src="./m1.jpg"
              alt="Fallback image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
        </div>
        <img
          src="./m2.jpg"
          alt="Image 2"
          className="w-[424px] h-[489px] object-cover"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <img
          src="./m3.jpg"
          alt="Image 3"
          className="w-[427px] h-[397px] object-cover"
        />
        <img
          src="./m4.jpg"
          alt="Image 4"
          className="w-[427px] h-[397px] object-cover"
        />
        <img
          src="./logo1.jpg"
          alt="Image 5"
          className="w-[427px] h-[397px] object-cover"
        />
      </div>

      <div className="text-left text-5xl mt-40 ml-8 mb-24">
        Silhouette No. 1 – Vermilion
      </div>
    </div>
  );
};

export default ProductGrid;
