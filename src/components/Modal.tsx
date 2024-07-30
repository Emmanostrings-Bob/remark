
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-y-auto no-scrollbar">
      <div className=" bg-transparent p-6 rounded-lg w-full max-w-3xl mx-4 my-10 overflow-y-auto overflow-x-hidden max-h-[90vh] no-scrollbar">
        <button
          className="absolute top-0 right-0 m-4 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
