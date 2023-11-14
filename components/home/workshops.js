import { Row, Col } from "antd";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Parallax } from "react-scroll-parallax";
const Workshops = () => {
  return (
    <Row className={styles.workshopsRow} justify="center" align="middle">
      <Col className={styles.workshopCol} xs={24} sm={24} md={24} lg={8} xl={8}>
        <div className={styles.workshopDiv}>
          <Parallax
            className={styles.workshopParallax}
            x={["-100px", "100px"]}
            tagOuter="div"
          >
            <Image
              alt="wallpaper"
              className={styles.workshopsImage}
              width="300"
              height="300"
              src="/images/home/w1.jpg"
            />
            <div className={styles.onImage}>
              <div className={styles.onImageText}>
                {" "}
                <h1>Workshop name</h1>
              </div>
              <a>إعرف المزيد</a>
            </div>
          </Parallax>
        </div>
      </Col>
      <Col className={styles.workshopCol} xs={24} sm={24} md={24} lg={8} xl={8}>
        <div className={styles.workshopDiv}>
          <Image
            alt="wallpaper"
            className={styles.workshopsImage}
            width="300"
            height="300"
            src="/images/home/w2.jpg"
          />
          <div className={styles.onImage}>
            <div className={styles.onImageText}>
              {" "}
              <h1>جَمعة عخير </h1>
            </div>
            <a>إعرف المزيد</a>
          </div>
        </div>
      </Col>
      <Col className={styles.workshopCol} xs={24} sm={24} md={24} lg={8} xl={8}>
        <div className={styles.workshopDiv}>
          <Parallax className={styles.workshopParallax} x={["100px", "-100px"]}>
            <Image
              alt="wallpaper"
              className={styles.workshopsImage}
              width="300"
              height="300"
              src="/images/home/w3.jpg"
            />
            <div className={styles.onImage}>
              <div className={styles.onImageText}>
                <h1>فتحولنا موضوع كبير</h1>
              </div>
              <a>إعرف المزيد</a>
            </div>
          </Parallax>
        </div>
      </Col>
    </Row>
  );
};

export default Workshops;
