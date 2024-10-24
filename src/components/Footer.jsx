import { useState, useEffect } from 'react';
import Modal from './Explore'; // Import the Modal component

const Footer = () => {
  const [year, setYear] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Year
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <footer className="center flex-col px-2 lg:px-6">
      <div className="flex justify-between items-center w-full mt-6">
        {/* Left Circle */}
        <div className="">➕</div>

        {/* Line */}
        <div className="flex-grow h-[1px] bg-gray-500 mx-0"></div>

        {/* Right Circle */}
        <div className="">➕</div>
      </div>

      {/* Idea Button */}
    

      <button
      onClick={openModal}
    className="  relative mt-6 inline-flex items-center justify-center p-4 px-6 py-2.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-0  hover:ring-purple-500">
    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
    <span
      className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
    <span className=" animate-bounce animate-pulse relative text-white text-base font-semibold">Have an Idea? Let's Build It!</span>
  </button>

      {/* Render the Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <div className="py-4 text-center lg:py-10">
        &copy; {year} BCA Resources. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
