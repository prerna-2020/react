import CardBlockItem from "./cardBlockItem";

function CardsBlock() {
  return (
    <>
      <ul className="flex flex-wrap justify-center lg:mx-4">
        <li className="mx-4 mb-4 w-md md:w-xs lg:w-[300px]">
          <CardBlockItem
            imgSrc="laptop.avif"
            heading="Surface Pro, Copilot PC"
            buttonText="Learn More"
            para="This laptop's unrivalled flexibility and AI features like Cocreator,
          enable you to do more than you ever imagined."
          />
        </li>
        <li className="mx-4 mb-4 w-md md:w-xs lg:w-[300px]">
          <CardBlockItem
            imgSrc="copilot.avif"
            heading="Copilot is your AI companion"
            buttonText="Download the Copilot App"
            para="Always by your side, ready to support you whenever and wherever you need it."
          />
        </li>
        <li className="mx-4 mb-4 w-md md:w-xs lg:w-[300px]">
          <CardBlockItem
            imgSrc="xbox.avif"
            heading="Xbox Series S"
            buttonText="Shop Xbox Series S"
            para="Next-gen performance in the smallest Xbox ever. "
          />
        </li>
        <li className="mx-4 mb-4 w-md md:w-xs lg:w-[300px]">
          <CardBlockItem
            imgSrc="xbox-x.webp"
            heading="Xbox Series X"
            buttonText="Shop Xbox Series X"
            para=" The fastest, most powerful Xbox ever."
          />
        </li>
      </ul>
    </>
  );
}

export default CardsBlock;
