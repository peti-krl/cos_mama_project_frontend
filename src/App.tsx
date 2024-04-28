import BackgroundBanner from "./app-components/home/BackgroundBanner";
import Events from "./app-components/home/Events"
import SearchBox from "./app-components/home/SearchBox";
import Sponsors from "./app-components/home/Sponsors";
import { Footer } from "./app-components/home/Footer";
import BlogHomepage from "./app-components/home/BlogHomepage";
import Subscription from "./app-components/home/Subscription";
import BePartner from "./app-components/home/BePartner";

export const App = () => {
  return (
    <>
    <BackgroundBanner />
    <SearchBox />
    <Events />
    <Subscription />
    <Sponsors />
    <BlogHomepage />
    <BePartner />
    <Footer />
    </>
  );
};
