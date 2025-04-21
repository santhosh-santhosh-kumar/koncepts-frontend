import './App.css';
import { useState, useEffect } from 'react'; // Import useEffect
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Pages/Layout';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import Carrier from './Pages/Carrier';
import Nopage from './Pages/Nopage';
import Contact from './Pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MenuStateContext } from './Components/Usecontext/UseContext';
import ScrollToTop from './Components/Scroll';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import PortfolioProject from './Pages/PortfolioProject';
import GetaquotePage from './Pages/GetaqoutePage';
import Meta from './Components/meta/meta';

// Services Pages
import ServiceWebDevelopment from './Pages/Servicesfile/ServiceWebDevelopment';
import MobileAppDevelopment from './Pages/Servicesfile/MobileAppDevelopment';
import NativeMobileApp from './Pages/Servicesfile/NativeMobileApp';
import CrossPlatformApp from './Pages/Servicesfile/CrossPlatfromApp';
import MobileAppConversion from './Pages/Servicesfile/MobileAppConversion';
import MobileAppReEng from './Pages/Servicesfile/MobileAppReEng';
import EcommerceDev from './Pages/Servicesfile/EcommerceDev';
import AppIntegration from './Pages/Servicesfile/AppIntegration';
import RequirementEngineering from './Pages/Servicesfile/RequirementEngineering';
import DedicatedHiring from './Pages/Servicesfile/DedicatedHiring';
import SEO from './Pages/Servicesfile/SEO';
import SocialMediaMarketing from './Pages/Servicesfile/SocialMediaMarketing';
import SearchEngineMarketing from './Pages/Servicesfile/SearchEngineMarketing';
import ContentMarketing from './Pages/Servicesfile/ContentMarketing';
import UIUX from './Pages/Servicesfile/UiUX';
import BrandIdentity from './Pages/Servicesfile/BrandIdentity';

// Technologies Pages
import PHP from './Pages/Technologies/PHP';
import DotNet from './Pages/Technologies/DotNet';
import Angular from './Pages/Technologies/Angular';
import HTML5 from './Pages/Technologies/HTML5';
import IOS from './Pages/Technologies/IOS';
import Android from './Pages/Technologies/Android';
import ReactNative from './Pages/Technologies/ReactNative';

AOS.init({ once: true });

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

function App() {
  const [MenuState, SetMenuState] = useState(false);

  function HandleMenuState() {
    SetMenuState(!MenuState);
  }

  return (
    <MenuStateContext.Provider value={{ MenuState, SetMenuState, HandleMenuState }}>
      <BrowserRouter>
        <LocationTracker />
        <Meta />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioProject />} />
            <Route path="/career" element={<Carrier />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/getaquote" element={<GetaquotePage />} />
            <Route path="/web_development" element={<ServiceWebDevelopment />} />
            <Route path="/mobile_app_development" element={<MobileAppDevelopment />} />
            <Route path="/native_apps" element={<NativeMobileApp />} />
            <Route path="/cross_platform_application" element={<CrossPlatformApp />} />
            <Route path="/mobile_app_conversion" element={<MobileAppConversion />} />
            <Route path="/mobile_app_re_engineering" element={<MobileAppReEng />} />
            <Route path="/e_commerce_development" element={<EcommerceDev />} />
            <Route path="/app.integration_webServices" element={<AppIntegration />} />
            <Route path="/requirement_engineering" element={<RequirementEngineering />} />
            <Route path="/dedicated_hiring" element={<DedicatedHiring />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/social_media_marketing" element={<SocialMediaMarketing />} />
            <Route path="/search_engine_marketing" element={<SearchEngineMarketing />} />
            <Route path="/content_marketing" element={<ContentMarketing />} />
            <Route path="/uiux" element={<UIUX />} />
            <Route path="/brand_identity" element={<BrandIdentity />} />
            <Route path="/php" element={<PHP />} />
            <Route path="/dot_net" element={<DotNet />} />
            <Route path="/angular_js" element={<Angular />} />
            <Route path="/html5" element={<HTML5 />} />
            <Route path="/ios" element={<IOS />} />
            <Route path="/android" element={<Android />} />
            <Route path="/react_native" element={<ReactNative />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </MenuStateContext.Provider>
  );
}

// Separate component for tracking location (Fixing useLocation inside Router)
function LocationTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-0LB5X80J3D", { // Replace with your GA4 ID
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component does not render anything
}

export default App;
