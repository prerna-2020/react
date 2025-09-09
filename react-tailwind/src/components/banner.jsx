function Banner() {
  return (
    <>
      <div className="shadow-sm shadow-gray-400 lg:shadow-none relative">
        <div className="lg:hidden mb-8">
          <img
            src="/src/assets/background-mob.avif"
            className="w-full h-auto"
          />
        </div>
        <div className="hidden lg:block relative">
          <img src="/src/assets/background.avif" className="w-full h-auto" />
        </div>
        <div className="text-left flex h-full flex-col lg:w-[50%] justify-center  lg:absolute lg:top0 lg:bottom-0">
          <div className="px-8 lg:px-32 lg:pt-5">
            <h1 className="font-medium text-2xl lg:text-4xl mb-5">
              Achieve the extraordinary
            </h1>
            <p className="mb-5 text-[15px]">
              Microsoft 365 delivers cloud storage, security and Microsoft
              Copilot in your favourite apps – all in one plan.
            </p>
            <button className="bg-sky-700 hover:bg-sky-800 text-white text-[15px] cursor-pointer font-semibold py-3 px-5 mb-6">
              Shop Microsoft 365
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
