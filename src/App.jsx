import "./App.css";
import Featurecompanies from "./components/FeatureCompanies/Featurecompanies";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/Searchbar/Searchbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Featurejobs from "./components/FeatureJobs/Featurejobs";
import Activeusers from "./components/ActiveUsers/Activeusers";
import Footer from "./components/Footer/Footer";
import Welcomeoffer from "./components/welcome0ffer/Welcomeoffer";

function App() {
  return (
    <>
      <Navbar />
      <Welcomeoffer />
      <SearchBar />
      <Featurecompanies />
      <Featurejobs />
      <Activeusers />
      <Footer />
    </>
  );
}

export default App;
