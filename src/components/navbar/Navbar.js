import React, { useEffect, useState } from "react";
import { ButtonOne, ButtonTwo } from "../reusables/buttons/Buttons";
import Image from "next/image";
import Logo from "../../../public/assets/images/lawchecks.png";
import { navItems } from "../index";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Modal from "../Modal/Modal";
import { Textinput } from "../inputs/Textinput";

const Navbar = () => {
  const [aside, setAside] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [signUpForm, setSignUpForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginModal, setLoginModal] = useState(false);
  const [SignUpmodal, setSignUpModal] = useState(false);

  const loginSubmit = (e) => {
    e.preventDefault();
    if (!loginForm.email && !loginForm.password) {
      alert("Fill in all fields");
      return;
    } else {
      console.log(loginForm);
      alert("Login Successfull");
    }
  };
  const signUpSubmit = (e) => {
    e.preventDefault();
    if (!signUpForm.email && !signUpForm.password && !signUpForm.userName && !signUpForm.confirmPassword) {
      alert("Fill in all fields");
      return;
    } else if(signUpForm.password !== signUpForm.confirmPassword){
      alert('Passwords do not match')
    } else {
      console.log(loginForm);
      alert("Sign Up Successfull");
    }
  };
  return (
    <>
      <nav className="top-0 z-50 bg-white  fixed w-full border-b flex justify-between px-5 md:px-20  items-center">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center justify-center h-16 overflow-hidden w-16 border rounded-full bg-white">
            <Image src={Logo} alt="" className="object-cover" />
          </div>
          <div className=" hidden md:flex items-center justify-start">
            {navItems.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="text-black font-medium hover:text-blue-600 mx-5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-row  gap-x-5">
          <ButtonOne
            buttonValue={"Log In"}
            Clicked={() => setLoginModal(!loginModal)}
          />
          <ButtonTwo
            buttonValue={"Sign Up"}
            Clicked={() => setSignUpModal(!SignUpmodal)}
          />
        </div>
        <span
          className="cursor-pointer active:animate-spin md:hidden text-black"
          onClick={() => setAside(!aside)}
        >
          <Menu />
        </span>
      </nav>
      <aside
        className={`fixed md:hidden flex flex-col justify-around items-start py-8 z-50 h-screen top-0 bottom-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] bg-white right-0 rounded-l-2xl border shadow-lg transition-transform duration-500 ${
          aside ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 md:static md:flex-row md:justify-between md:items-center md:py-4 md:h-auto md:bg-transparent md:border-none`}
      >
        {/* Close Button */}
        <span
          className="absolute right-4 top-4 cursor-pointer active:animate-spin text-black md:hidden"
          onClick={() => setAside(!aside)}
        >
          <X />
        </span>

        {/* Navigation Links */}
        <div className="flex flex-col justify-between gap-y-12 my-5 pt-16 md:pt-0 md:flex-row md:gap-x-8 md:my-0">
          {navItems.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="text-black font-medium hover:text-blue-600 mx-5 md:mx-0 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-x-5 md:gap-x-4">
          <ButtonOne
            buttonValue={"Log In"}
            Clicked={() => setLoginModal(!loginModal)}
            className="text-sm md:text-base"
          />
          <ButtonTwo
            buttonValue={"Sign Up"}
            Clicked={() => setSignUpModal(!SignUpmodal)}
            className="text-sm md:text-base"
          />
        </div>
      </aside>

      <Modal
        isOpen={loginModal}
        onClose={() => setLoginModal(!loginModal)}
        onSubmit={loginSubmit}
        title={`Login`}
        buttonValue={"Login"}
      >
        <div>
          <Textinput
            id="login email"
            label={`Email`}
            value={loginForm.email}
            changed={(e) =>
              setLoginForm({
                ...loginForm,
                email: e.target.value,
              })
            }
            className={"border-b"}
          />
        </div>
        <div className="my-4">
          <Textinput
            id="login password"
            label={`Password`}
            value={loginForm.password}
            changed={(e) =>
              setLoginForm({
                ...loginForm,
                password: e.target.value,
              })
            }
            className={"border-b"}
          />
        </div>
      </Modal>

      <Modal
        onSubmit={signUpSubmit}
        isOpen={SignUpmodal}
        onClose={() => setSignUpModal(!SignUpmodal)}
        title={"Sign Up"}
      >
        <div>
          <Textinput
            id="signup fullname"
            label={`Full Name`}
            value={signUpForm.userName}
            changed={(e) =>
              setSignUpForm({
                ...signUpForm,
                userName: e.target.value,
              })
            }
            className={"border-b"}
          />
        </div>
        <div className="mt-4">
          <Textinput
            id="signup email"
            label={`Email`}
            value={signUpForm.email}
            changed={(e) =>
              setSignUpForm({
                ...signUpForm,
                email: e.target.value,
              })
            }
            className={"border-b"}
          />
        </div>
        <div className="mt-4">
          <Textinput
            id="signup password"
            label={`Password`}
            value={signUpForm.password}
            changed={(e) =>
              setSignUpForm({
                ...loginForm,
                password: e.target.value,
              })
            }
            className={"border-b"}
          />
        </div>
        <div className="mt-4">
          <Textinput
            id="confirm password"
            label={`Confirm Password`}
            value={signUpForm.password}
            changed={(e) =>
              setSignUpForm({
                ...loginForm,
                confirmPassword: e.target.value,
              })
            }
            className={"border-b"}
          />
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
