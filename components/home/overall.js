import { Row, Col } from "antd";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Slide from "react-reveal/Slide";
import Link from "next/link";
const Overall = () => {
  return (
    <div className={styles.overallSection} id="activities">
      <Slide bottom cascade>
        <Row justify="center" align="middle" className={styles.overallRow}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.overallCol}>
            <div className={styles.overallContainer}>
              <Link href="/activities/#mawdou3-kbir">
                <a>
                  <Image width={"300"} height={"200"} src="/images/home/activity1.jpg" alt="فتحولنا موضوع كبير" />
                  <div className={styles.overallCardTitle}>
                    <h1> فتحولنا موضوع كبير</h1>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.overallCol}>
            <div className={styles.overallContainer}>
              <Link href="/activities/#jam3a-3akher">
                <a>
                  <Image width={"300"} height={"200"} src="/images/home/activity2.jpg" alt="جمعة عخير" />
                  <div className={styles.overallCardTitle}>
                    <h1> جمعة عخير </h1>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.overallCol}>
            <div className={styles.overallContainer}>
              <Link href="/activities/#jwarshe-belwarshe">
                <a>
                  <Image width={"300"} height={"200"} src="/images/home/activity3.jpg" alt="ورشة بالورشة" />
                  <div className={styles.overallCardTitle}>
                    <h1> ورشة بالورشة </h1>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row justify="center" align="middle" className={styles.overallRow}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.overallCol}>
            <div className={styles.overallContainer}>
              <a>
                <Image width={"300"} height={"200"} src="/images/home/club1.jpg" alt="Movie club" />
                <div className={styles.overallCardTitle}>
                  <h1> Movie club </h1>
                </div>
              </a>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.overallCol}>
            <div className={styles.overallContainer}>
              <a>
                <Image width={"300"} height={"200"} src="/images/home/club2.jpg" alt="Book club" />
                <div className={styles.overallCardTitle}>
                  <h1> Book club </h1>
                </div>
              </a>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.overallCol}>
            <div className={styles.overallContainer}>
              <a>
                <Image width={"300"} height={"200"} src="/images/home/club3.jpg" alt="Song club" />
                <div className={styles.overallCardTitle}>
                  <h1> Song club</h1>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Slide>
    </div>
  );
};

export default Overall;
