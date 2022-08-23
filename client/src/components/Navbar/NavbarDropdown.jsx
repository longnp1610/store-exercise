import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../contexts";
import Accordion from "./../Accordion/Accordion";
import AccordionItem from "../Accordion/AccordionItem";

const NavbarDropdown = ({ type, item }) => {
  const classNames = useContext(AppContext);
  return (
    <>
      {type === "desktop" && (
        <Menu
          as="div"
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "relative inline-block text-left rounded-md text-lg text-[1rem] font-medium"
          )}
        >
          <div>
            <Menu.Button className="px-3 py-2 inline-flex justify-center w-full">
              {item.name}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 my-auto"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute left-0 mt-3 w-52 rounded-md shadow-2xl bg-white">
              <div className="py-1">
                {item.dropdown.map((el, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <NavLink
                        key={index}
                        to={{
                          pathname: item.href,
                          search: "?filter=" + el.search,
                        }}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-lg text-[0.9rem]"
                        )}
                      >
                        {el.name}
                      </NavLink>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}

      {type === "mobile" && (
        <div>
          <Accordion
            title={item.name}
            style={{
              className: "text-gray-300 hover:bg-gray-700 hover:text-white",
            }}
          >
            {item.dropdown.map((el, index) => (
              <AccordionItem key={index}>
                <NavLink
                  to={{
                    pathname: item.href,
                    search: "?filter=" + el.search,
                  }}
                >
                  {el.name}
                </NavLink>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </>
  );
};

export default NavbarDropdown;
