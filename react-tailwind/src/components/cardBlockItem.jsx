function CardBlockItem({ imgSrc, heading, para, buttonText }) {
  return (
    <div className="flex shadow-md shadow-gray-300 flex-col lg:h-[440px]">
      <img
        src={"/src/assets/" + imgSrc}
        alt=""
        className="max-w-full w-md md:w-sm"
      />
      <div className="p-5">
        <h2 className="font-semibold my-3 text-xl lg:text-2xl">{heading}</h2>
        <p className="text-sm my-3 leading-6 lg:text-md">{para}</p>
        <button className="border-0 bg-sky-700 hover:bg-sky-800 px-4 py-2 text-sm text-white lg:mt-3">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default CardBlockItem;
