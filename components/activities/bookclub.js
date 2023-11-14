import Image from "next/image";
import styles from "../../styles/Activities.module.css";
const Bookclub = () => {
  return (
    <div className={styles.bookclubSection} id="book-club">
      <h1>نادي الكتاب </h1>
      <h2>
        أما بالنسبة لنادي الكتاب، قررت الورشة تعزيز أهمية الكتاب من خلال جمع رواد القراءة ومحبيها مرة كل شهر المناقشة مختلف أنواع الكتب قديمة كانت أم
        جديدة و بمختلف اللغات العربية والإنجليزية والفرنسية. ويهدف نادي الكتاب إلى خلق جو ثقافي وإجتماعي
      </h2>
      <div className={styles.bookclubContainer}>
        <div className={styles.bookclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/book1.jpeg" alt="man" />
        </div>
        <div className={styles.bookclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/book2.jpeg" alt="man" />
        </div>
        <div className={styles.bookclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/book3.jpeg" alt="man" />
        </div>
        <div className={styles.bookclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/book4.jpeg" alt="man" />
        </div>
        <div className={styles.bookclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/book5.jpeg" alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Bookclub;
