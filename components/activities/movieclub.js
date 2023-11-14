import Image from "next/image";
import styles from "../../styles/Activities.module.css";
const Movieclub = () => {
  return (
    <div className={styles.movieclubSection} id="movie-club">
      <h1>نادي السينما </h1>
      <h2>يوم الأربعاء من كل أسبوع، يجتمع فيه رواد الورشة في مركزها ببرجا لمشاهدة فيلم عربي كان أم أجنبي.</h2>
      <div className={styles.movieclubContainer}>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie1.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie2.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie3.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie4.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie5.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie6.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie7.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie8.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie9.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie10.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie11.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie12.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie13.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie14.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie15.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie16.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie17.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie18.jpeg" alt="man" />
        </div>
        <div className={styles.movieclubImgDiv}>
          <Image width={"300"} height={"300"} src="/images/activities/movie19.jpeg" alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Movieclub;
