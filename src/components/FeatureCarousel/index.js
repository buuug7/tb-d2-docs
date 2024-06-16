import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./styles.module.css";

export default function FeatureCarousel({ features = [] }) {
  return (
    <Carousel
      showArrows={true}
      showStatus={true}
      showThumbs={false}
      dynamicHeight={true}
      infiniteLoop={true}
      autoPlay={true}
      style={{ width: "100%" }}
    >
      {features.map((it) => (
        <div>
          <div
            className={styles.carouselItem}
            style={{
              backgroundImage: `url(${it.path})`,
            }}
          ></div>
          <div className={styles.carouselCaption}>
            <div className={styles.captionText}>{it.description}</div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
