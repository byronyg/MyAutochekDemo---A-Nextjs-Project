import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import car1 from "../assets/car1.jpeg";
import car2 from "../assets/2.jpeg";
import car3 from "../assets/3.jpeg";
const Imageslider = () => {
  return (
    <div>
      <Carousel>
        <div>
          {/* <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png"
            alt="image1"
          /> */}
          <Image
            src={car1}
            layout="responsive"
            alt="image1"
            placeholder="blur"
          />
        </div>
        <div>
          <Image src={car2} layout="responsive" alt="image1" />
        </div>
        <div>
          <Image src={car3} layout="responsive" alt="image1" />
        </div>
      </Carousel>
    </div>
  );
};

export default Imageslider;
