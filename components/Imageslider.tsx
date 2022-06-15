import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Imageslider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png"
            alt="image1"
          />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png"
            alt="image2"
          />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png"
            alt="image3"
          />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <img
            src="/https://media.geeksforgeeks.org/wp-content/uploads/20211213172228/4.png"
            alt="image4"
          />
          <p className="legend">Image 4</p>
        </div>
        <div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png"
            alt="image5"
          />
          <p className="legend">Image 5</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Imageslider;
