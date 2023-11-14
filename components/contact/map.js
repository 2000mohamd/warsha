import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
import styles from "../../styles/Contact.module.css";
const Map = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <>
      {" "}
      <div className={styles.mapSection}>
        {/* <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
        <AnyReactComponent lat={59.955413} lng={30.337844} text="Al Warshe" />
      </GoogleMapReact> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.4023406424653!2d35.405782715204495!3d33.646735380718226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ee54be54f0b75%3A0x281e0f8b87d64388!2zQWwgV2Fyc2hlaCBieSBEci4gS2hhbGVkIEdoYXR0YXNzINin2YTZiNix2LTYqQ!5e0!3m2!1sen!2slb!4v1639732198668!5m2!1sen!2slb"
          width="50%"
          height="100%"
          // style={{ border: 0 }}
          // allowfullscreen=""
          // loading="lazy"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53042.15225307465!2d35.86785047400699!3d33.80884157632509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f35c71132fa33%3A0x48944ac6a50ec419!2sAl%20Warsheh%20by%20Dr%20Khaled%20Ghattass!5e0!3m2!1sen!2slb!4v1646638173116!5m2!1sen!2slb"
          width="50%"
          height="100%"
          // style={{ border: 0 }}
        ></iframe>
      </div>
    </>
  );
};

export default Map;
