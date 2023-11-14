import styles from "../../styles/About.module.css";
import Slide from "react-reveal/Slide";
import Image from "next/image";
const DrSection = () => {
  return (
    <div className={styles.AboutdrKhaledGhattasSection} id="drKhaledGhattas">
      <Slide bottom>
        <Image
          alt="Dr Khaled"
          width="400"
          height="120"
          src="/images/about/drkhaledwho.svg"
        />
      </Slide>
      <h3 className={styles.AboutdrDesc}>
        ولد د. خالد غطاس في ١٠ أيلول من العام ۱۹۸۳ في صيدا وترعرع في منزل أبويه
        القائم في بلدته برجا. حصل على دكتوراه في البيولوجيا الخلوية
        والجزئية-سرطان الثدي من الجامعة الأميركية في بيروت. في سنة ٢٠١٠، سافر
        إلى إسبانيا سنة لنيل شهادة ماجستير أخرى في إدارة الأعمال الدولية من أهم
        كليات إدارة العمال في العالم IE School of Business. ثم انتقل إلى دبي
        ليتم تعيينه كمدير التخطيط والعمليات في الشرق الأوسط لإحدى أكبر الشركات
        العالمية المصنعة للأدوية في العالم.{" "}
      </h3>
      <h3 className={styles.AboutdrDesc}>
        يشتهر د. خالد بين تلاميذه وأهله وأصدقائه بروح الفكاهة والنقد الهزلي
        وقدرته على رؤية الأشياء بمنظورٍ مختلف. تتخطى اهتماماته البحث العلمي
        لتشمل اهتمامات أخرى تتمحور حول الإنسان وترقيه من خلال مشاركته الأفكار
        عبر مواقع تواصل الإجتماعية التي من شأنها إحياء أجزاء من حضارتنا ونشر بعض
        الوعي وخلق حالة من الأمل في بلدنا لبنان والعالم العربي. وحالياً يكثّف
        نشاطه التوعوي هذا من خلال محاضراته وكتاباته.
      </h3>
    </div>
  );
};

export default DrSection;
