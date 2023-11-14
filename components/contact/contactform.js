import { Input, Button } from "antd";
import styles from "../../styles/Contact.module.css";
import { WhatsAppOutlined } from "@ant-design/icons";
import { useState } from "react";
const { TextArea } = Input;
const ContactForm = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    window.open(`https://wa.me/96176523875?text=${message}`, "_blank");
    setMessage("");
  };
  return (
    <div className={styles.contactForm}>
      <TextArea
        rows={15}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button onClick={sendMessage}>
        Send To Whatsapp <WhatsAppOutlined />
      </Button>
    </div>
  );
};

export default ContactForm;
