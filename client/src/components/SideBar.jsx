import { asideItemsBefore } from "../constant/asideItem.js";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../assets/images/user.jfif";
import logo from "../assets/favicon/android-chrome-512x512.png";
import { toggleTheme } from "../redux/authSlice.js";
import { useEffect } from "react";

const SideBar = ({ onClick }) => {
  const { userInfo, theme } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0 bg-modal-backdrop transition-all duration-700 ease-in-out backdrop-blur-sm">
        <aside
          className={
            "w-[300px] h-full bg-lightBackgroud dark:bg-darkBackground flex flex-col p-2"
          }
        >
          {userInfo ? (
            <div
              className={
                "w-full h-fit mb-3 py-2 flex justify-between items-center relative"
              }
            >
              <span
                className={
                  " w-full h-fit px-1 flex justify-start items-center overflow-hidden"
                }
              >
                <span className={"w-[64px] h-[64px] mr-2"}>
                  <img
                    src={avatar}
                    className={"w-full h-full rounded-full"}
                    alt={"...."}
                  />
                </span>
                <span className={"flex flex-col text-[14px] font-bold"}>
                  <span
                    className={
                      "text-2xl text-darkTextColor dark:text-lightTextColor"
                    }
                  >
                    MicroDeft
                  </span>
                  <span className={"text-[12px] text-grayTextColor "}>
                    microdeft@gmail.com
                  </span>
                </span>
              </span>
              <span
                className={
                  "w-7 h-7 rounded-full font-medium bg-darkBackground text-white flex items-center justify-center absolute top-0 right-[-20px] shadow-2xl shadow-black cursor-pointer"
                }
                onClick={onClick}
              >
                <FontAwesomeIcon icon="fa-solid fa-chevron-left" size={"sm"} />
              </span>
            </div>
          ) : (
            <div
              className={
                "w-full h-fit mb-3 py-2 flex justify-between items-center relative"
              }
            >
              <span
                className={
                  " w-full h-fit px-1 flex justify-start items-center overflow-hidden"
                }
              >
                <span className={"w-[64px] h-[64px] mr-2"}>
                  <img
                    src={logo}
                    className={"w-full h-full rounded-full"}
                    alt={"...."}
                  />
                </span>
                <span className={"flex flex-col text-[14px] font-bold"}>
                  <span
                    className={
                      "text-2xl text-darkTextColor dark:text-lightTextColor"
                    }
                  >
                    MicroDeft
                  </span>
                  <span className={"text-[12px] text-grayTextColor "}>
                    microdeft@gmail.com
                  </span>
                </span>
              </span>
              <span
                className={
                  "w-7 h-7 rounded-full font-medium bg-darkBackground text-white flex items-center justify-center absolute top-0 right-[-20px] shadow-2xl shadow-black cursor-pointer"
                }
                onClick={onClick}
              >
                <FontAwesomeIcon icon="fa-solid fa-chevron-left" size={"sm"} />
              </span>
            </div>
          )}
          <div
            className={
              "w-full h-fit flex flex-col justify-start items-start px-1 dark:text-lightTextColor"
            }
          >
            {asideItemsBefore.map((asideItem) => {
              return (
                <NavLink
                  to={asideItem.link}
                  key={asideItem.id}
                  id="navlink"
                  // className={
                  //   "w-full h-[55px] mb-3 flex items-center justify-start rounded-[15px] px-3 focus:bg-activeLinkLightBackground focus:text-pinkTextColor  dark:focus:bg-activeLinkDarkBackground dark:focus:text-lightTextColor"
                  // }
                  className={({ isActive }) => {
                    return isActive
                      ? "w-full h-[55px] mb-3 flex items-center justify-start rounded-[15px] px-3 bg-activeLinkLightBackground text-pinkTextColor  dark:bg-activeLinkDarkBackground dark:text-lightTextColor"
                      : "w-full h-[55px] mb-3 flex items-center justify-start rounded-[15px] px-3";
                  }}
                >
                  <span className={"mr-4 size-[22px]"}>
                    <FontAwesomeIcon
                      icon={asideItem.icon}
                      className={"w-full h-full"}
                    />
                  </span>
                  <span className={"text-[18px] font-medium"}>
                    {asideItem.name}
                  </span>
                </NavLink>
              );
            })}
          </div>
          <div className={"w-full h-full flex items-end justify-center px-1 "}>
            <div
              className={
                "w-full h-fit py-1 px-2 flex items-center justify-between bg-switchModeLightBg rounded-[15px] text-darkTextColor dark:text-lightTextColor font-medium  dark:bg-switchModeDarkBg"
              }
            >
              <button
                className={`w-1/2 h-8 flex justify-center items-center  rounded-[15px] shadow-white ${
                  theme === "light" ? "bg-lightBackgroud" : ""
                } focus:bg-lightBackgroud dark:focus:bg-darkBackground  dark:text-lightTextColor`}
                onClick={() => dispatch(toggleTheme("light"))}
              >
                <FontAwesomeIcon icon="fa-solid fa-sun" className={"mr-2"} />
                <span>Light</span>
              </button>
              <button
                className={`w-1/2 h-8 flex justify-center items-center  rounded-[15px] shadow-white focus:bg-lightBackgroud dark:focus:bg-darkBackground ${
                  theme === "dark" ? "bg-darkBackground" : ""
                } `}
                onClick={() => dispatch(toggleTheme("dark"))}
              >
                <FontAwesomeIcon icon="fa-solid fa-moon" className={"mr-2"} />
                <span>Dark</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
