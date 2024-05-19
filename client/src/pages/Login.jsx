import { Link } from "react-router-dom";
import { authIcons } from "../constant/icons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loginInputs } from "../constant/registerInputs.js";
import { useState } from "react";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const loginUser = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={"w-full h-full flex justify-center items-center"}>
        <div
          className={
            "md:w-[900px] w-full md:h-[600px] shadow-2xl overflow-hidden flex flex-wrap rounded border border-inherit"
          }
        >
          <div
            className={
              "md:w-4/12 h-full w-full  flex flex-col justify-center items-center bg-darkBackground text-lightTextColor dark:text-darkTextColor dark:bg-lightBackgroud "
            }
          >
            <p className={"text-center py-4 text-3xl font-bold"}>MicroDeft</p>
            <div
              className={
                "w-full h-full flex flex-col justify-center items-center p-2"
              }
            >
              <h1 className={"text-center text-4xl font-medium mb-3"}>
                Dont Have a Account
              </h1>
              <p className={"text-center mb-3"}>
                To keep connected with us please register with your personal
                info
              </p>
              <Link
                to={"/userRegister"}
                className={
                  "w-[200px] h-12 flex justify-center items-center bg-lightBackgroud text-darkTextColor dark:text-lightTextColor dark:bg-darkBackground py-1 font-medium rounded-[10px] text-[14px] "
                }
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div
            className={
              "md:w-8/12 w-full h-full px-4 py-4 flex flex-col justify-center items-center bg-lightBackgroud dark:bg-darkBackground"
            }
          >
            <h1
              className={
                "w-full py-3 text-3xl font-medium flex justify-center items-center"
              }
            >
              Login Account
            </h1>
            <div className={"w-full flex justify-center items-center py-2"}>
              {authIcons.map((icon) => {
                return (
                  <span
                    key={icon.id}
                    className={
                      "w-11 h-11 flex justify-center items-center m-2 rounded-full bg-lightBackgroud dark:bg-darkBackground cursor-pointer hover:bg-fuchsia-600 shadow-2xl shadow-activeLinkDarkBackground  hover:animate-bounce"
                    }
                  >
                    <FontAwesomeIcon icon={icon.icon} size={"xl"} />
                  </span>
                );
              })}
            </div>
            <p
              className={
                "w-full  flex justify-center items-center text-xl text-balance mb-3"
              }
            >
              or use your email for login
            </p>
            <form
              className={
                "w-full h-full flex flex-col justify-center items-center "
              }
              onSubmit={loginUser}
            >
              {loginInputs.map((input, index) => {
                return (
                  <div
                    key={index}
                    className={
                      "w-full h-fit flex flex-col justify-center items-center px-2 "
                    }
                  >
                    <label
                      htmlFor={input.htmlFor}
                      className={
                        "w-full h-10 text-[16px] font-bold flex justify-start items-center"
                      }
                    >
                      {input.label}
                    </label>
                    <input
                      id={input.id}
                      name={input.name}
                      type={input.type}
                      className={
                        "w-full h-14  rounded flex items-center justify-center border text-darkTextColor pl-4  mb-3 dark:bg-gray-700"
                      }
                      placeholder={input.placeholder}
                      onChange={handleChange}
                    />
                  </div>
                );
              })}
              <button
                type={"submit"}
                className={
                  "w-[200px] h-14 flex justify-center items-center mb-7 border rounded font-bold bg-darkBackground text-lightTextColor dark:bg-lightBackgroud dark:text-darkTextColor"
                }
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
