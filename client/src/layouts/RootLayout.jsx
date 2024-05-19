import SideBar from "../components/SideBar";
import { Footer } from "../components/Footer.jsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RootLayout = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleSidebar = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <>
      <header
        className={
          "w-full h-16 flex justify-between text-xl items-center px-2 bg-slate-100 dark:bg-gray-900 dark:text-lightTextColor"
        }
      >
        <div>MicroDeft Test</div>
        <button onClick={handleSidebar}>
          <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
        </button>
      </header>
      {openSideBar && <SideBar onClick={handleSidebar} />}
      <main
        className={
          "w-full min-h-screen h-screen px-1 py-2 text-darkTextColor dark:text-lightTextColor"
        }
      >
        {children}
      </main>
      <footer className={"w-full h-full"}>
        <Footer />
      </footer>
    </>
  );
};
