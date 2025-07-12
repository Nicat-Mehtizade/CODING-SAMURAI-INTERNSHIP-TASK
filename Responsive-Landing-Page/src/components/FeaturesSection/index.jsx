const FeaturesSection = () => {
  return (
    <div className="py-20">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-around gap-15 px-5 md:px-0">
          <div>
            <img className="w-100" src="https://appco.themetags.com/img/image-14.png" alt="" />
          </div>
          <div className="md:w-[60%]">
            <h1 className="text-2xl md:text-4xl font-semibold mb-5">Share your Photos with Friends Easily</h1>
            <p className="text-gray-500 mb-5 text-xs md:text-[16px]">
              Objectively deliver professional value with diverse web-readiness.
              Collaboratively transition wireless customer service without
              goal-oriented catalysts for change. Collaboratively.
            </p>
            <p className="text-gray-500 mb-10 md:mb-15 text-xs md:text-[16px]">
              Uniquely simplify sustainable applications whereas adaptive
              schemas. Competently brand performance based content and.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-5 md:gap-10">
                <div className="rounded-sm border-1 border-gray-200 bg-white w-15 h-15 shadow-lg flex items-center justify-center">
                    <img src="https://appco.themetags.com/img/image-icon-2.png" alt="" />
                </div>
                <div className="rounded-sm border-1 border-gray-200 bg-white w-15 h-15 shadow-lg flex items-center justify-center">
                    <img src="https://appco.themetags.com/img/image-icon-3.png" alt="" />
                </div>
                <div className="rounded-sm border-1 border-gray-200 bg-white w-15 h-15 shadow-lg flex items-center justify-center">
                    <img src="https://appco.themetags.com/img/image-icon-4.png" alt="" />
                </div>
                <div className="rounded-sm border-1 border-gray-200 bg-white w-15 h-15 shadow-lg flex items-center justify-center">
                    <img src="https://appco.themetags.com/img/image-icon-1.png" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
