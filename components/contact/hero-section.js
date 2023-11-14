import styles from "../../styles/Contact.module.css";
import Image from "next/image";
const ContactWallpaper = () => {
  return (
    <div className={styles.ContactWallpaperDiv}>
      <Image
        src="/images/contact/contactwallpaper.jpeg"
        alt="حكونا"
        layout="responsive"
        width="100vw"
        height="33.25vw"
      />
    </div>
  );
};

export default ContactWallpaper;
