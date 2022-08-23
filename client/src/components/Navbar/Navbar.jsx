import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import NavbarDropdown from "./NavbarDropdown";
import NavbarButton from "./NavbarButton";
import { useLocation } from "react-router-dom";
import { useState, useLayoutEffect } from "react";

const navItem = [
  { name: "Home", href: "/", current: false },
  {
    name: "Bicycles",
    href: "/bicycles",
    current: false,
    dropdown: [
      { name: "Kid's Bicycles", search: "children" },
      { name: "Adult Bicycles", search: "adult" },
    ],
  },
  { name: "Gears", href: "/gears", current: false },
  { name: "Contacts", href: "/contacts", current: false },
];

const Navbar = () => {
  const [navigation, setNavigation] = useState(navItem);
  const location = useLocation();

  useLayoutEffect(() => {
    const getLocation = (path) => {
      return "/".concat(path.split("/")[1]);
    };
    setNavigation(
      navigation.map((el) =>
        getLocation(el.href) === getLocation(location.pathname)
          ? { ...el, current: true }
          : { ...el, current: false }
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-[6rem]">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile Menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center relative">
                    <div className="mr-[3.3rem] text-white text-4xl font-bold">
                      Crock
                    </div>
                    <div className="absolute text-white text-2xl right-0 bottom-0 font-bold">
                      bike
                    </div>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4 rounded-md">
                      {navigation.map((item, index) =>
                        item.dropdown !== undefined ? (
                          <NavbarDropdown
                            key={index}
                            item={item}
                            type={"desktop"}
                          />
                        ) : (
                          <NavbarButton
                            key={index}
                            item={item}
                            type={"desktop"}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none"
                  >
                    <span className="sr-only">Shopping cart</span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu  */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, index) =>
                  item.dropdown !== undefined ? (
                    <NavbarDropdown key={index} item={item} type={"mobile"} />
                  ) : (
                    <NavbarButton key={index} item={item} type={"mobile"} />
                  )
                )}
                <Disclosure.Button
                  as="a"
                  href="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
