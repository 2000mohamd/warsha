import Cards from "../components/activities/cards";
import Movieclub from "../components/activities/movieclub";
import ActivitiesWallpaper from "../components/activities/hero-section";
import Clubs from "../components/activities/clubs";
import Bookclub from "../components/activities/bookclub";
import Programs from "../components/activities/programs";
const Activities = () => {
  return (
    <>
      <ActivitiesWallpaper />
      <Programs />
      <Clubs />
      <Movieclub />
      <Bookclub />
      {/* <Cards /> */}
    </>
  );
};

export default Activities;
