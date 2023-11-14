import { Row, Col, Button } from "antd";
import Image from "next/image";
import styles from "../../styles/Events.module.css";

import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const Upcoming = () => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const size = window.innerWidth;
    setSmallScreen(size < 1024);
  }, []);

  return (
    <>
      <div className={styles.allEvents} id="new">
        <div className={styles.event}>
          {/* <div className={styles.eventDate}>
            <h1>DEC</h1>
            <hr />
            <h2>19</h2>
          </div> */}
          <div className={styles.eventimageDiv}>
            <Image
              className={styles.eventimage}
              width={smallScreen ? "600" : "400"}
              height={smallScreen ? "600" : "400"}
              src="/images/events/oldevent.jpg"
              alt="event"
            />
          </div>

          <div className={styles.eventInformation}>
            <h1>فتحولنا موضوع كبير</h1> <h2>&quot;هل الانسان يتغير؟&quot;</h2>
            <div className={styles.eventdetails}>
              <div>
                <h3>
                  <CalendarOutlined /> الأحد ١٩ - ١٢ - ٢٠٢١
                </h3>
              </div>
              <div>
                <h3>
                  <ClockCircleOutlined /> الساعة ٤:٠٠ مساءً
                </h3>
              </div>
              <div>
                <h3>
                  <EnvironmentOutlined /> البقاع
                </h3>
              </div>
            </div>
            <div className={styles.eventContactBtn}>
              <Button type="primary">حكونا</Button>
            </div>
          </div>
          <div className={styles.eventsocial}>
            <FacebookOutlined className={styles.fb} />
            <InstagramOutlined className={styles.insta} />

            <WhatsAppOutlined className={styles.whats} />
          </div>
        </div>
      </div>

      {/* <div className={styles.oldEvents}>
        <div className={styles.oldEvent}>
          <div className={styles.eventImg}>
            {" "}
            <Image width={"300"} height={"300"} src="/images/events/oldevent.jpg" alt="man" />
          </div>

          <div className={styles.social}>
            <FacebookOutlined className={styles.fb} />
            <InstagramOutlined className={styles.insta} />

            <WhatsAppOutlined className={styles.whats} />
          </div>
        </div>

        <div className={styles.oldEvent}>
          <div className={styles.eventImg}>
            {" "}
            <Image width={"300"} height={"300"} src="/images/events/oldevent.jpg" alt="man" />
          </div>

          <div className={styles.social}>
            <FacebookOutlined className={styles.fb} />
            <InstagramOutlined className={styles.insta} />

            <WhatsAppOutlined className={styles.whats} />
          </div>
        </div>

        <div className={styles.oldEvent}>
          <div className={styles.eventImg}>
            {" "}
            <Image width={"300"} height={"300"} src="/images/events/oldevent.jpg" alt="man" />
          </div>

          <div className={styles.social}>
            <FacebookOutlined className={styles.fb} />
            <InstagramOutlined className={styles.insta} />

            <WhatsAppOutlined className={styles.whats} />
          </div>
        </div>

        <div className={styles.oldEvent}>
          <div className={styles.eventImg}>
            {" "}
            <Image width={"300"} height={"300"} src="/images/events/oldevent.jpg" alt="man" />
          </div>

          <div className={styles.social}>
            <FacebookOutlined className={styles.fb} />
            <InstagramOutlined className={styles.insta} />

            <WhatsAppOutlined className={styles.whats} />
          </div>
        </div>

        <div className={styles.oldEvent}>
          <div className={styles.eventImg}>
            {" "}
            <Image width={"300"} height={"300"} src="/images/events/oldevent.jpg" alt="man" />
          </div>

          <div className={styles.social}>
            <FacebookOutlined className={styles.fb} />
            <InstagramOutlined className={styles.insta} />

            <WhatsAppOutlined className={styles.whats} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Upcoming;
