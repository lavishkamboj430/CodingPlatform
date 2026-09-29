import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Problems", path: "/problems" },
  { name: "Playground", path: "/playground" },
  { name: "Explore", path: "/explore" },
];

const authButtons = [
  {
    name: "Login",
    path: "/login",
    className: "border border-zinc-700",
    className2:" border border-zinc-700 bg-zinc-100 text-black"
  },
  {
    name: "Sign Up",
    path: "/signup",
    className: "bg-white text-black ",
    className2: "bg-white text-black ",
  },
];

const Navbar = ({Theme}) => {
  return (
    <header className="flex items-center justify-between border-b border-zinc-900 px-8 py-4">
      
      {/* Logo */}
      <Link to="/" className={Theme?"text-lg font-semibold":" text-black text-lg font-semibold"}>
        {"</>"} CodeBase
      </Link>

      {/* Navigation */}
      <nav className="hidden gap-8 md:flex">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={`text-sm ${ Theme ? "text-white" : "text-zinc-900 hover:text-zinc-700"}`}>
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        {authButtons.map((button) => (
          <Link
            key={button.path}
            to={button.path}
            className={`rounded-md px-4 py-2 ${Theme?button.className:button.className2}`}
          >
            {button.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;