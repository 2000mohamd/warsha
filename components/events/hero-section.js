import styles from "../../styles/Events.module.css";
import Image from "next/image";
const EventsWallpaper = () => {
  return (
    <div className={styles.EventsWallpaperDiv}>
      <Image
        className={styles.EventsWallpaperImg}
        src="/images/events/eventswallpaper.jpeg"
        alt=" شو في هل الشهر"
        layout="responsive"
        width="100vw"
        height="33.25vw"
      />
    </div>
  );
};

export default EventsWallpaper;
