import { Row, Col } from "antd";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import styles from "../../styles/Home.module.css";

const HomeIntro = () => {
  return (
    <>
      <Row className={styles.introRow} justify="center" align="bottom">
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <div className={styles.introText}>
            <Fade right>
              <p className={styles.p1}>أُريدُ أن أُدخلَ</p>
              <p className={styles.p2}>بعض الفِكر في أفكارنا</p>
              <p className={styles.p3}>بعض الحياةِ في حياتنا</p>
              <p className={styles.p4}>بعض الانسان في انسانيتنا</p>
              <p className={styles.p5}>ثُمّ نغيّرَ بذلك الدنيا ...</p>
              <p className={styles.p6}> د. خالد غطاس</p>
            </Fade>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <Zoom>
            <Image
              className={styles.introImg}
              width={"918"}
              height={"812"}
              src="/images/home/drkhaledimg.png"
              alt="man"
            />
          </Zoom>
        </Col>
      </Row>
    </>
  );
};

export default HomeIntro;
