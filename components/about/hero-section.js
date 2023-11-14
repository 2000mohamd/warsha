import Image from "next/image";
import styles from "../../styles/About.module.css";

const AbouttWallpaper = () => {
  return (
    <div className={styles.AboutWallpaperDiv}>
      <Image
        className={styles.AboutWallpaperImg}
        src="/images/about/aboutWallpaper.jpg"
        alt="About Wallpaper"
        layout="responsive"
        width="100vw"
        height="33.25vw"
      />
    </div>
  );
};

export default AbouttWallpaper;
