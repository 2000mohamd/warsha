import { Col, Row, Carousel } from "antd";
import Image from "next/image";
import ReactPlayer from "react-player";
import styles from "../../styles/About.module.css";

const WarsheSection = () => {
  return (
    <div className={styles.AboutWarsheSection} id="alwarshe">
      {/* <h1>شو هي الورشة ؟</h1> */}
      <Row justify="center" align="middle" className={styles.AboutWarsheRow}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <h2 className={styles.AboutWarsheDesc}>
            فكرة جريئة وغريبة أطلقها الدكتور خالد غطاس وتحوّلت الى حركة تتسع يوما بعد يوم كنموذج اجتماعي محوره الإنسان وهدفه الارتقاء به كأفراد
            ومجتمعات. تستقطب الورشة أفراد من خلفيّات متنوعة تجمعهم رؤية وحدة ويحرّكهم شغف التغيير  من خلال نشر الفعاليّة الحقيقية.
          </h2>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <div className={styles.aboutVideo}>
            <ReactPlayer
              // playing={true}
              controls={true}
              url="/images/about/aboutalwarshe.mp4"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WarsheSection;
