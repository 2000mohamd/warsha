import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/About.module.css";
import $ from "jquery";
const Feedback = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  ////////////////////////////////////////////////////////////////////////////
  var Slider = (function () {
    var initSlider = function () {
      var dir = $("html").attr("dir");

      // if (start - end < -150) {
      //   $(".arrow-left").trigger("click");
      // } else $(".arrow-right").trigger("click");

      // if (start - end > 150) {
      //   $(".arrow-right").trigger("click");
      // } else $(".arrow-left").trigger("click");

      $(".arrow-right , .arrow-left").click(function (event) {
        var nextActiveSlide = $(".slide.active").next();

        if ($(this).hasClass("arrow-left")) nextActiveSlide = $(".slide.active").prev();

        if (nextActiveSlide.length > 0) {
          var nextActiveIndex = nextActiveSlide.index();
          $(".dots span").removeClass("active");
          $($(".dots").children()[nextActiveIndex]).addClass("active");

          updateSlides(nextActiveSlide);
        }
      });

      $(".dots span").click(function (event) {
        var slideIndex = $(this).index();
        var nextActiveSlide = $($(".slider").children()[slideIndex]);
        $(".dots span").removeClass("active");
        $(this).addClass("active");

        updateSlides(nextActiveSlide);
      });

      var updateSlides = function (nextActiveSlide) {
        var nextActiveSlideIndex = $(nextActiveSlide).index();

        $(".slide").removeClass("prev-1");
        $(".slide").removeClass("next-1");
        $(".slide").removeClass("active");
        $(".slide").removeClass("prev-2");
        $(".slide").removeClass("next-2");

        nextActiveSlide.addClass("active");

        nextActiveSlide.prev().addClass("prev-1");
        nextActiveSlide.prev().prev().addClass("prev-2");
        nextActiveSlide.addClass("active");
        nextActiveSlide.next().addClass("next-1");
        nextActiveSlide.next().next().addClass("next-2");
      };

      var updateToNextSlide = function (nextActiveSlide) {};
    };
    return {
      init: function () {
        initSlider();
      },
    };
  })();
  useEffect(() => {
    $(function () {
      Slider.init();
    });
  }, []);
  /////////////////////////////////////////////////
  const handleMouseDown = (e) => {
    console.log("handleMouseDown", e);
    setStart(e.clientX);
  };
  const handleMouseMove = (e) => {
    console.log("handleMouseMove", e);
    setEnd(e.clientX);
  };
  const handleMouseUp = () => {
    if (start - end < -150) $(".arrow-left").trigger("click");

    if (start - end > 150) $(".arrow-right").trigger("click");
  };
  const handleMouseLeave = () => {
    // if (start - end < -150) $(".arrow-left").trigger("click");
    // if (start - end > 150) $(".arrow-right").trigger("click");
  };

  const handleTouchStart = (e) => {
    console.log("handleTouchStart", e);
    setStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    console.log("handleTouchMove", e);
    setEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (start - end < -150) $(".arrow-left").trigger("click");

    if (start - end > 150) $(".arrow-right").trigger("click");
  };
  return (
    <div className="slider-container">
      <div className={styles.feedbackTitle}>
        <h1>شو قالوا عن الورشة</h1>
      </div>
      <span className="arrow-left"></span>
      <span className="arrow-right"></span>
      <div
        className="slider"
        id="slider"
        onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
        onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleTouchEnd()}
        onMouseDown={(mouseDownEvent) => handleMouseDown(mouseDownEvent)}
        onMouseMove={(mouseMoveEvent) => handleMouseMove(mouseMoveEvent)}
        onMouseUp={() => handleMouseUp()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="slide prev-2">
          {" "}
          <div className={styles.feedbackContent}>
            <Image src="/images/about/saadramadan.jpg" alt="Saad Ramadan" layout="responsive" width="100vw" height="50vw" />

            <h1>الفنان سعد رمضان</h1>

            <h2>
              وحدة من الأفكار القليلة جدّاً الي بعد ممكن نعوّل عليها لبناء مجتمع حقيقي سليم، وانا فخور انها بلشّت من ضيعتي وأكيد انها حتوصل لكل لبنان
              والعالم العربي ان شاء الله...
            </h2>
          </div>
        </div>
        <div className="slide prev-1">
          {" "}
          <div className={styles.feedbackContent}>
            <Image src="/images/about/nabilsaad.jpeg" alt="saad" layout="responsive" width="100vw" height="50vw" />

            <h1>الفنان نبيل سعد </h1>
            {/* <h2>فنان</h2> */}
            <h2>
              بدات الغرسة من روح مفعمة بالنشاط وتغذت على حب العطاء.... فبين الجد والمرح وبين العفوية والعمق في التفكير.. وبين السلاسة في المعاملة
              وعيون ثاقبة نحو الهدف... كبرر الجذع وحطت عليه ورود.... كل وردة بلون وكل وردة بخصوصية تجمعها محبة وصداقة وعائلة واحدة اسمها الورشة واخ
              كبير اسمه دخالد غطاس
            </h2>
          </div>
        </div>
        <div className="slide active">
          <div className={styles.feedbackContent}>
            <Image src="/images/about/nehmesaliba.jpeg" alt="saad" layout="responsive" width="100vw" height="50vw" />

            <h1>أبونا نعمة صليبا</h1>

            <h2>
              الورشة تحرك لبناني اصيل وتدل على العمل المستمر في بناء الذات وبناء المجتمع. الورشة مجموعة صبايا وشباب تعبوا من الخطاب المعلب وعم يبحثوا
              عا فضاء حر ما فيه احكام مسبقة ولا صور نمطية. الورشة فسحة امل يظهر فيها كل شخص موهبته وبيعمل على تطويرها ايجابيا بروح من الاخوة
              الإنسانية.
            </h2>
          </div>
        </div>
        <div className="slide next-1">
          {" "}
          <div className={styles.feedbackContent}>
            <Image src="/images/about/kamalbkasini.jpeg" alt="saad" layout="responsive" width="100vw" height="50vw" />

            <h1> مؤسس &quot;ارض المبدعين&quot; كمال بكاسيني</h1>

            <h2>
              لورشة هي نموذج مصغّر عن لبنان الذي نريده من خلال رسالتها التي تتوجه للفئات الشبابية لبناء مستقبل افضل وأرقى. وفي حديثه عن مؤسس الورشة،
              يصرّح ان الدكتور خالد شخصية لا تسعى إلّا لإعطاء من خبراته للجيل الشباب ما تعلّمه في الحياة وكيفية مواجهة المشاكل والصعاب. ويضيف بكاسيني
              إنه قرر الوقوف ودعم الورشة وروادها بعدما لمس فيهم روح والإيمان بأنفسهم محاوليين تغيير المجتمع والدنيا.
            </h2>
          </div>
        </div>
        <div className="slide next-2">
          {" "}
          <div className={styles.feedbackContent}>
            <Image src="/images/about/saad.jpg" alt="saad" layout="responsive" width="100vw" height="50vw" />

            <h1>Saad Ramadan</h1>
            <h2>Singer</h2>
            <h2>feedback feedback feedback feedback feedback feedback feedback feedback</h2>
          </div>
        </div>
        <div className="slide">
          {" "}
          <div className={styles.feedbackContent}>
            <Image src="/images/about/saad.jpg" alt="saad" layout="responsive" width="100vw" height="50vw" />

            <h1>Saad Ramadan</h1>
            <h2>Singer</h2>
            <h2>feedback feedback feedback feedback feedback feedback feedback feedback</h2>
          </div>
        </div>
        <div className="slide">
          {" "}
          <div className={styles.feedbackContent}>
            <Image src="/images/about/saad.jpg" alt="saad" layout="responsive" width="100vw" height="50vw" />

            <h1>Saad Ramadan</h1>
            <h2>Singer</h2>
            <h2>feedback feedback feedback feedback feedback feedback feedback feedback</h2>
          </div>
        </div>
        <div className="slide">
          {" "}
          <div className={styles.feedbackContent}>
            <Image src="/images/about/saad.jpg" alt="saad" layout="responsive" width="100vw" height="50vw" />

            <h1>Saad Ramadan</h1>
            <h2>Singer</h2>
            <h2>feedback feedback feedback feedback feedback feedback feedback feedback</h2>
          </div>
        </div>
      </div>
      <div className="dots">
        <span></span>
        <span></span>
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Feedback;
