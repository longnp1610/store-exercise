import React from "react";

const AccordionItem = ({ children }) => {
  return (
    <div className="px-10 py-2 w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-base font-medium">
      {children}
    </div>
  );
};

export default AccordionItem;
