import { Button } from "antd";
import Image from "next/image";
import Script from "next/script";
import $ from "jquery";
import Head from "next/head";
import { useEffect } from "react";
import styles from "../../styles/About.module.css";
const Family = () => {
  useEffect(() => {
    (function () {
      let width = screen.width;
      console.log(width);
      $(".carousel-showmanymoveone .item").each(function () {
        let j = width < 992 ? 8 : 6;
        var itemToClone = $(this);

        for (var i = 1; i < j; i++) {
          itemToClone = itemToClone.next();

          // wrap around if at end of item collection
          if (!itemToClone.length) {
            itemToClone = $(this).siblings(":first");
          }

          // grab item, clone, add marker className, add to collection
          itemToClone
            .children(":first-child")
            .clone()
            .addClass("cloneditem-" + i)
            .appendTo($(this));
        }
      });
    })();
  }, []);
  return (
    <div className={styles.familyContainer}>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
      <Script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
          crossOrigin="anonymous"
        />
      </Head>

      <div className={styles.familyHeader}>
        <h1>عيلة الورشة</h1>
        <h2>
          عيلة الورشة عمتكبر كل يوم ،و مهما بتكبر آمالنا إنه بكرة أكيد أحلى و
          إنه الإنسان المنيح موجود
        </h2>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div
            className="carousel carousel-showmanymoveone slide"
            id="carousel-tilenav"
            data-interval="false"
          >
            <div className="carousel-inner">
              <div className="item active">
                <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#">
                    <img
                      alt="family"
                      src="/images/about/fam1.jpg"
                      className="img-responsive"
                      layout="fill"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#">
                    <img
                      alt="family"
                      src="/images/about/fam2.jpg"
                      className="img-responsive"
                      layout="fill"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#">
                    <img
                      alt="family"
                      src="/images/about/fam3.jpg"
                      className="img-responsive"
                      layout="fill"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#">
                    <img
                      alt="family"
                      src="/images/about/fam4.jpg"
                      className="img-responsive"
                      layout="fill"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#">
                    <img
                      alt="family"
                      src="/images/about/fam5.jpg"
                      className="img-responsive"
                      layout="fill"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#">
                    <img
                      alt="family"
                      src="/images/about/fam6.jpg"
                      className="img-responsive"
                      layout="fill"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#">
                    <img
                      alt="family"
                      src="/images/about/fam7.jpg"
                      className="img-responsive"
                      layout="fill"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#">
                    <img
                      alt="family"
                      src="/images/about/fam8.jpg"
                      className="img-responsive"
                      layout="fill"
                    />
                  </a>
                </div>
              </div>
            </div>
            <a
              className="left carousel-control"
              href="#carousel-tilenav"
              data-slide="prev"
            >
              <i className="glyphicon glyphicon-chevron-left"></i>
            </a>
            <a
              className="right carousel-control"
              href="#carousel-tilenav"
              data-slide="next"
            >
              <i className="glyphicon glyphicon-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.familyFooter}>
        <div>
          <h3>منحكي بالإنسان و قيمه و منحاول نعيش هل القيم </h3>
          <h3> و نحييها من خلال كل شي منخلقه بالورشة</h3>
          <Button type="primary">حكونا</Button>
        </div>
      </div>
    </div>
  );
};

export default Family;
