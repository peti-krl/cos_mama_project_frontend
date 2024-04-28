import BackgroundBanner from "./app-components/home/BackgroundBanner";
import Events from "./app-components/home/Events"
import SearchBox from "./app-components/home/SearchBox";
import Sponsors from "./app-components/home/Sponsors";
import BlogHomepage from "./app-components/home/BlogHomepage";
import Navbar from "./app-components/Navbar/Navbar";
import { Footer } from "./app-components/home/Footer";

import Subscription from "./app-components/home/Subscription";
import BePartner from "./app-components/home/BePartner";

export const App = () => {
  return ( 
    <>
    <Navbar />
    <BackgroundBanner />
    <SearchBox />
    <Events />
    <Subscription />
    <Sponsors />
    <BlogHomepage />
    <BePartner />
    <Footer />
    </>
  )
};
