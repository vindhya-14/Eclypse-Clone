

const BrandOverview = () => {
  
  return (
    <div>
      <div>
        <div className="text-5xl mt-24 mb-20 ml-8 space-y-5">
          <div>Rooted in a philosophy of quiet luxury, our</div>
          <div>garments are designed to speak softly in</div>
          <div>cut, in movement, in presence.</div>
        </div>
      </div>
      

      <div className="ml-8 inline-block">
        <span
          role="link"
          tabIndex={0}
          className="
          text-2xl pb-6 px-2 cursor-pointer inline-block
          transition-all duration-300
          underline text-white
          hover:bg-white hover:text-black hover:no-underline
          hover:translate-x-1 hover:translate-y-1
        "
        >
          Learn more about Eclypse ↗
        </span>
      </div>
    </div>
  );
};

export default BrandOverview;
