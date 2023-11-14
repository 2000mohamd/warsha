import { Row, Col, Button } from "antd";
import Image from "next/image";
import styles from "../../styles/Events.module.css";

const Programs = () => {
  return (
    <div className={styles.programsContainer}>
      <div style={{ height: 50 }} id="mawdou3-kbir"></div>
      <Row className={styles.programRow} justify="center" align="top">
        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 2, span: 24 }}
          md={{ order: 2, span: 24 }}
          lg={{ order: 1, span: 12 }}
          xl={{ order: 1, span: 12 }}
        >
          <div className={styles.programDescription1}>
            <h2>فتحولنا موضوع كبيير</h2>
            {/* <h3>( بين الغريب و السائد)</h3> */}
            <h4>
              فتحولنا موضوع كبير: يعتبر &quot;فتحولتا موضوع كبير من الركائز الأساسية التي بنيت عليها مبادرة الورشة والتي تهدف إلى إرساء الرسالة في
              نفوس الناس، هي عبارة عن جلسة حوارية نقاشية يديرها المؤسس حيث يطرح موضوعا معينا&quot; يشغل بال المجتمع مبنية على نقاشات يتبادلها الجميع
              من خلال إعطاء أرائهم وطرحهم لبعض المواقف من حياتهم الشخصية.
            </h4>
            <Button type="primary">حكونا لتعرف أكتر</Button>
          </div>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          md={{ order: 1, span: 24 }}
          lg={{ order: 2, span: 12 }}
          xl={{ order: 2, span: 12 }}
        >
          <Image className={styles.programDescImg1} width={"450"} height={"350"} src="/images/home/activity1.jpg" alt="فتحولنا موضوع كبيير" />
        </Col>
        {/* <Col xs={8} sm={8} md={8} lg={4} xl={4}>
          <div className={styles.programDate}>
            <h1>Friday</h1>

            <hr />

            <h2>20:00</h2>
          </div>
        </Col> */}
      </Row>
      <div style={{ height: 50 }} id="jam3a-3akher"></div>
      <Row className={styles.programRow} justify="center" align="top">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Image className={styles.programDescImg2} width={"450"} height={"350"} src="/images/home/activity2.jpg" alt="جمعة عخير" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.programDescription2}>
            <h2> جمعة عخير </h2>
            {/* <h3>( بين الغريب و السائد)</h3> */}
            <h4>
              بجمعة عخير ما حدا فينا مختصّ، منحضّر شوي و منحكي شو منحس ... ولما يجي دوركن كمان حتعملو نفس الشي ان شاء الله، كل واحد بيحكي نص ساعة واذا
              بدكن كمان فيكن تجيبو أهلكن و أصحابكن يسمعولكن ... حياتهم الشخصية.
            </h4>
            <Button type="primary">حكونا لتعرف أكتر</Button>
          </div>
        </Col>
      </Row>
      <div style={{ height: 50 }} id="warshe-belwarshe"></div>
      <Row className={styles.programRow} justify="center" align="top">
        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 2, span: 24 }}
          md={{ order: 2, span: 24 }}
          lg={{ order: 1, span: 12 }}
          xl={{ order: 1, span: 12 }}
        >
          <div className={styles.programDescription1}>
            <h2>ورشة بالورشة </h2>
            {/* <h3>( بين الغريب و السائد)</h3> */}
            <h4>
              تسعى الورشة الى احاطة الفرد بكافة النشاطات التي تساعد على تطوير مهاراته الفكرية والاجتماعية. من هنا أطلقت فكرة &quot;ورشة بالورشة&quot;
              لتنظيم ورش عمل فعّالة تخدم الإنسان وترتقي به. فتنظّم الورشة أسبوعيًّا هذه الورش وتستقبل المشاركين من مختلف المناطق اللبنانيّة. ومن ورش
              العمل التي نظّمتها: ورشة عن مهارات الحياة، ورشة عن استراتيجيات التفاوض، ورشة عن الصوت الداخلي… كما تعمل حاليًّا على اطلاق ورش عملٍ من
              تقديم أفرادها مثل ورشة العمل عن الإيجابية السامة وورشة العمل عن الوحدة.
            </h4>
            <Button type="primary">حكونا لتعرف أكتر</Button>
          </div>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          md={{ order: 1, span: 24 }}
          lg={{ order: 2, span: 12 }}
          xl={{ order: 2, span: 12 }}
        >
          <Image className={styles.programDescImg1} width={"450"} height={"350"} src="/images/home/activity3.jpg" alt="جمعة عخير" />
        </Col>
        {/* <Col xs={8} sm={8} md={8} lg={4} xl={4}>
          <div className={styles.programDate}>
            <h1>Friday</h1>

            <hr />

            <h2>20:00</h2>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default Programs;
