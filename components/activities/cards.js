import styles from "../../styles/Activities.module.css";
import { Row, Col } from "antd";
import Image from "next/image";
const Cards = () => {
  return (
    <div className={styles.Cards}>
      <Row justify="center" align="middle" className={styles.cardsRow}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.cardCol}>
          <div className={styles.container}>
            <Image
              width={"350"}
              height={"350"}
              src="/images/activities/card1.jpg"
              alt="man"
            />
            <div className={styles.cardInfo}> Movie Club Al Warsheh </div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.cardCol}>
          <div className={styles.container}>
            <Image
              width={"350"}
              height={"350"}
              src="/images/activities/card2.jpg"
              alt="man"
            />
            <div className={styles.cardInfo}> نادي كتاب الورشة </div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.cardCol}>
          <div className={styles.container}>
            <Image
              width={"350"}
              height={"350"}
              src="/images/activities/card3.jpg"
              alt="man"
            />
            <div className={styles.cardInfo}> ورشة بالورشة</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
