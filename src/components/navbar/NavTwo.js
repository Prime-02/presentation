import React, { useState } from "react";
import { ButtonOne, ButtonTwo } from "../reusables/buttons/Buttons";
import Image from "next/image";
import Logo from "../../../public/assets/images/lawchecks (2).png";
import { navItems } from "../index";
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Modal from "../Modal/Modal";
import { Textinput } from "../inputs/Textinput";

const NavTwo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signUpForm, setSignUpForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const loginSubmit = (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      alert("Fill in all fields");
      return;
    }
    alert("Login Successful");
  };

  const signUpSubmit = (e) => {
    e.preventDefault();
    if (
      !signUpForm.userName ||
      !signUpForm.email ||
      !signUpForm.password ||
      !signUpForm.confirmPassword
    ) {
      alert("Fill in all fields");
      return;
    }
    if (signUpForm.password !== signUpForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Sign Up Successful");
  };

  return (
    <nav className="bg-white fixed top-0 w-full z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="h-12 w-12 relative">
            <Image src={Logo} alt="Logo" className="object-contain" fill />
          </div>
        <div className="flex items-center">
          <div className="hidden md:flex ml-8 space-x-6">
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-black font-medium hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <ButtonOne buttonValue="Log In" Clicked={() => setLoginModal(true)} />
          <ButtonTwo
            buttonValue="Sign Up"
            Clicked={() => setSignUpModal(true)}
          />
        </div>
        <div className="md:hidden">
          <button
            className="flex items-center text-black focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? (
              <X className="ml-2" />
            ) : (
              <Menu className="ml-2" />
            )}
          </button>
        </div>
      </div>
      {dropdownOpen && (
        <div className="bg-white shadow-md md:hidden">
          <div className="flex flex-col px-4 py-2 space-y-4">
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-black font-medium hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <ButtonOne
              buttonValue="Log In"
              Clicked={() => {
                setLoginModal(true);
                setDropdownOpen(false);
              }}
            />
            <ButtonTwo
              buttonValue="Sign Up"
              Clicked={() => {
                setSignUpModal(true);
                setDropdownOpen(false);
              }}
            />
          </div>
        </div>
      )}
      <Modal
        isOpen={loginModal}
        onClose={() => setLoginModal(false)}
        onSubmit={loginSubmit}
        title="Login"
        buttonValue="Login"
      >
        <Textinput
          id="login-email"
          label="Email"
          value={loginForm.email}
          changed={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
          className="border-b"
        />
        <Textinput
          id="login-password"
          label="Password"
          value={loginForm.password}
          changed={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
          className="border-b mt-4"
        />
      </Modal>
      <Modal
        isOpen={signUpModal}
        onClose={() => setSignUpModal(false)}
        onSubmit={signUpSubmit}
        title="Sign Up"
        buttonValue="Sign Up"
      >
        <Textinput
          id="signup-name"
          label="Full Name"
          value={signUpForm.userName}
          changed={(e) =>
            setSignUpForm({ ...signUpForm, userName: e.target.value })
          }
          className="border-b"
        />
        <Textinput
          id="signup-email"
          label="Email"
          value={signUpForm.email}
          changed={(e) =>
            setSignUpForm({ ...signUpForm, email: e.target.value })
          }
          className="border-b mt-4"
        />
        <Textinput
          id="signup-password"
          label="Password"
          value={signUpForm.password}
          changed={(e) =>
            setSignUpForm({ ...signUpForm, password: e.target.value })
          }
          className="border-b mt-4"
        />
        <Textinput
          id="signup-confirm-password"
          label="Confirm Password"
          value={signUpForm.confirmPassword}
          changed={(e) =>
            setSignUpForm({ ...signUpForm, confirmPassword: e.target.value })
          }
          className="border-b mt-4"
        />
      </Modal>
    </nav>
  );
};

export default NavTwo;
