import AboutWallpaper from "../components/about/hero-section";
import Partners from "../components/about/partners";
import DrSection from "../components/about/dr-section";
import WarsheSection from "../components/about/warshe-section";
import Feedback from "../components/about/feedback";
import Family from "../components/about/family";
const About = () => {
  return (
    <>
      <AboutWallpaper />
      <WarsheSection />
      <DrSection />
      <Feedback />
      <Family />

      {/* <Partners /> */}
    </>
  );
};

export default About;
