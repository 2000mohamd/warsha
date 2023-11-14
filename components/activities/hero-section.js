import styles from "../../styles/Activities.module.css";
import Image from "next/image";
const ActivitiesWallpaper = () => {
  return (
    <div className={styles.ActivitiesWallpaperDiv}>
      <Image
        className={styles.ActivitiesWallpaperImg}
        src="/images/activities/activitywallpaper.jpeg"
        alt="ورش عمل"
        layout="responsive"
        width="100vw"
        height="33.25vw"
      />
    </div>
  );
};

export default ActivitiesWallpaper;
