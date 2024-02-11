import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      {/* SECTION: NAVBAR */}
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
      />
      {/* SECTION: HOME */}
      <Home setSelectedPage={setSelectedPage} />
      {/* SECTION: BENEFITS */}
      <Benefits setSelectedPage={setSelectedPage} />
      {/* SECTION: OUR CLASSES */}
      <OurClasses setSelectedPage={setSelectedPage} />
      {/* SECTION: CONTACT US */}
      <ContactUs setSelectedPage={setSelectedPage} />
      {/* SECTION: FOOTER */}
      <Footer />
    </div>
  );
}

export default App
