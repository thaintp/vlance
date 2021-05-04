import "./style.scss";
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {
  return (
    <Carousel className="my-carousel">
      <Carousel.Item className="my-carousel__item">
        <img
          className="d-block w-100"
          src="https://cdn.asiatatler.com/asiatatler/i/hk/2020/01/20123811-hong-kong-most-expensive-city-julius-baer-hong-kong-tatler_cover_2000x1342.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="my-carousel__item">
        <img
          className="d-block w-100"
          src="https://pix10.agoda.net/hotelImages/3375/-1/f73547b49eadee36c6346f52a5b4f4fe.jpg?s=1024x768"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="my-carousel__item">
        <img
          className="d-block w-100"
          src="https://www.pewtrusts.org/-/media/post-launch-images/2020/04/sotc-2020_main.jpg?h=1074&w=1820&la=en&hash=642D8D12C220EC348D4C7B2D469A4260"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
