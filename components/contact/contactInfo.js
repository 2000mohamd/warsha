import styles from "../../styles/Contact.module.css";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div>
        <PhoneOutlined className={styles.phone} width={100} />
        <p>+961 111 222</p>
      </div>

      <div>
        <MailOutlined className={styles.mail} />
        <p>username@website.com</p>
      </div>

      <div>
        <EnvironmentOutlined className={styles.gps} />
        <p>place</p>
      </div>
    </div>
  );
};

export default ContactInfo;
