import Image from "next/image";
import banner from "../../public/images/Red and Yellow Playful Illustrative Khichdi Recipe YouTube Thumbnail.jpg";

const Banner = () => {
  return (
    <div className="pt-32">
      <Image
        src={banner}
        alt="Khichdi Recipe Banner"
        className=" h-72 p-6 object-cover rounded-lg"
        priority
      />
    </div>
  );
};

export default Banner;
