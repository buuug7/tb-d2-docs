import { Carousel } from "react-responsive-carousel";
import styles from "./styles.module.css";

export default function FeatureCarousel({ features = [] }) {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={true}
      infiniteLoop={true}
      autoPlay={true}
      style={{ width: "100%" }}
    >
      {features.map((it) => (
        <div key={it.path}>
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
