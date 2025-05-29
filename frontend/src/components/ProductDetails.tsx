

const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="border-2 border-blue-400 rounded-md p-4 w-full max-w-5xl flex flex-col md:flex-row gap-6">
        {/* Left: Add New Address */}
        <div className="bg-white border rounded-md p-6 flex-1">
          <div className="flex items-center mb-4">
            <span className="w-5 h-5 flex items-center justify-center border-2 border-red-500 rounded-full text-red-500 mr-2">
              <svg
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="10" />
              </svg>
            </span>
            <span className="font-semibold text-lg">Add New Address</span>
          </div>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <input
              type="text"
              placeholder="Street Address"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Apt Number"
                className="border rounded px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="State"
                className="border rounded px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Zip"
                className="border rounded px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                className="border-2 border-purple-500 text-purple-500 px-8 py-2 rounded hover:bg-purple-50 transition-colors"
              >
                cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition-colors flex-1"
              >
                Save This Address
              </button>
            </div>
          </form>
        </div>
        {/* Right: Order Summary */}
        <div className="bg-gray-50 border rounded-md p-6 w-full md:w-96 flex flex-col justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-4">
              By placing your order, you agree to our company{" "}
              <a href="#" className="underline">
                Privacy policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Conditions of use
              </a>
              .
            </p>
            <h2 className="font-semibold mb-2">Order Summary</h2>
            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <div className="flex justify-between">
                <span>Items - Silhouette No. 1 – Vermilion</span>
                <span>7,999</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping and handling:</span>
                <span>200</span>
              </div>
              <div className="flex justify-between">
                <span>Before tax:</span>
                <span>6,599</span>
              </div>
              <div className="flex justify-between">
                <span>Tax Collected:</span>
                <span>1,400</span>
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Order Total:</span>
              <span>8,199</span>
            </div>
          </div>
          <button className="mt-6 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
