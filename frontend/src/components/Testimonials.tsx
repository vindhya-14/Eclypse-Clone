

const Testimonials = () => {
  return (
    <section className=" bg-black">
      <hr></hr>
      <div>
        {/* Section Title */}
        <h2 className="text-slate-300 mt-6  ml-7 text-left text-lg tracking-widest gap-9">
          OUR CUSTOMERS
        </h2>

        {/* Testimonial Card */}
        <div className=" py-12 px-4 md:px-8">
          {/* Testimonial Text */}
          <blockquote className="text-5xl ml-14 font-normal leading-relaxed mb-8">
            "Understated, but unforgettable.
            <br />
            It feels like it was made for me"
          </blockquote>

          {/* Customer Info */}
          <div className="space-y-1 ">
            <p className="text-slate-300 text-2xl ml-14">Random Woman</p>
            <p className="text-gray-600 text-sm ml-14">NY, USA</p>
          </div>
        </div>

        {/* Navigation Dots (optional) */}
        <div className="flex justify-center mt-8 space-x-2">
          {[1, 2, 3].map((dot) => (
            <button
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === 1 ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${dot}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
