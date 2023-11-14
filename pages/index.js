import HomeHeroSection from "../components/home/hero-section";
import HomeIntro from "../components/home/intro-section";
import Workshops from "../components/home/workshops";
import Basics from "../components/home/basics";
import DrkhaleldIntro from "../components/home/drkhaleldIntro";
import Moto from "../components/home/moto";
import Overall from "../components/home/overall";
import NewLocation from "../components/home/newlocation";
const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <Basics />
      <Moto />
      <Overall />
      {/* <Workshops />  */}
      <DrkhaleldIntro />
      {/* <HomeIntro /> */}
      {/* <NewLocation /> */}
    </div>
  );
};

export default Home;
