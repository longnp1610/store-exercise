import React, { useState, useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { AppContext } from "../../contexts";

const Accordion = ({ style, title, children }) => {
  const classNames = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);

  const handleOpen = () => {
    setIsActive(isActive ? false : true);
  };
  console.log(style);
  return (
    <>
      <div
        onClick={() => handleOpen()}
        className={classNames(
          style && style.className,
          "px-3 py-2 w-full rounded-md text-base font-medium flex cursor-pointer"
        )}
      >
        {title}
        <ChevronDownIcon
          className="-mr-1 ml-2 h-5 w-5 my-auto"
          aria-hidden="true"
        />
      </div>
      <div className={isActive ? "block" : "hidden"}>{children}</div>
    </>
  );
};

export default Accordion;
