import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../contexts";
import { Disclosure } from "@headlessui/react";

const NavbarButton = ({ item, type }) => {
  const classNames = useContext(AppContext);
  return (
    <>
      {type === "desktop" && (
        <NavLink
          key={item.name}
          to={item.href}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "px-3 py-2 rounded-md text-lg text-[1rem] font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </NavLink>
      )}
      {type === "mobile" && (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "block px-3 py-2 rounded-md text-base font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Disclosure.Button>
      )}
    </>
  );
};

export default NavbarButton;
