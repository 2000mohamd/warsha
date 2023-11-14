import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Button } from "antd";
import Slide from "react-reveal/Slide";
import { Carousel } from "antd";

const DrkhaleldIntro = () => {
  return (
    <>
      <div className={styles.drIntroContainer}>
        <div className={styles.drIntroTitle}>
          <h1>مخطئ من اعتبر الحلم نقيض الواقع، إنه ببساطة إرتقاء عنه بضع درجات</h1>
          <h3>إن الواقع الثابت حكر على الضعفاء: دعوهم يتأقلمون عليه... أما الأقوياء فلهم واقع آخر قيد التحقيق</h3>
        </div>

        <div className={styles.drIntroContent}>
          <div className={styles.drIntroDetails}>
            <Slide right>
              <div className={styles.drIntroDetailsText}>
                <h4> إلى الذين لا يثنيهم التأقلم مع الواقع عن محاولة تغييره...</h4>
                <h4>إلى الذين يبطؤون ليتفكروا في أي وجهة يسيرون...</h4>
                <h4>إلى الذين يتحدون دنيا قائمة بدنيا أفضل...</h4>
                <h4>إلى الذين ينهضون ويستنهضون</h4>
                <h4>إلى الذين لا يخافون الأمل...</h4>
              </div>
              <Button type="primary">تعرف على د. خالد غطاس </Button>
            </Slide>
          </div>

          <div className={styles.drIntroImg}>
            <Image alt="Dr Khaled" width="400" height="300" src="/images/home/drVideo.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DrkhaleldIntro;
