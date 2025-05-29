const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="mb-8 mt-28 w-[383px] h-[129px] bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: "url('./H1.jpg')" }}
      ></div>

      <div className=" max-w-[1339px] aspect-[1339/530] relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover "
        >
          <source src="./n1.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('./H2.jpg')" }}
          ></div>
        </video>
      </div>
    </div>
  );
};

export default HeroSection