import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import car1 from "../assets/car1.jpeg";
import car2 from "../assets/2.jpeg";
import car3 from "../assets/3.jpeg";

const images = [car1, car2, car3];
const Imageslider = () => {
  return (
    <div style={{ width: "100%" }}>
      <Carousel>
        {images.map((img, i) => (
          <div>
            <Image
              key={`carousel-image-${i}`}
              src={img}
              layout="responsive"
              alt="image1"
              placeholder="blur"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Imageslider;
