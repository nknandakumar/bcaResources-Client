const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if the modal is not open
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50  ">
        <div className="bg-white p-8 rounded-lg h-[100vh] m-4 my-6 w-full">
          <h2 className="text-2xl font-bold mb-4">Share Your Idea</h2>
          <p className="mb-6">If you or your batchmates have an idea or project you'd like to bring to life, whether it's a website or an app, our team is here to help. Reach out to us, and let's create something amazing together!" </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  