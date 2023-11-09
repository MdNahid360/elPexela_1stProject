import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 z-10">
        {children}
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
