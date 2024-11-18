import { Suspense, lazy, useState } from "react";
import HeroImg from "../assets/HeroImage.webp";
import SemSkeliton from "../components/UI/SemSkeliton";
import Chatbot from "../components/ChatBot";
import { Lightbulb } from "lucide-react";
import Model from "../components/Explore"
const Semester = lazy(() => import("./Semester"));
import NavBar from './../components/NavBar';
import { Link } from "react-router-dom";

const Home = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	
    const openModal = () => {
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };
	return (
		<> 
		<Chatbot/>
		<NavBar/>
			<section className="p-6 lg:p-32">
				<div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10">
				<div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
              BCA Library
              <span className="block  bg-gradient-to-tr text-indigo-600">Access Question Papers and Notes</span>
            </h1>
            <p className="text-lg text-gray-600">
              Access comprehensive study materials, past papers, and resources organized by semester. 
              Elevate your learning journey with us. guided by our AI Assistance Chatbot for instant support and smarter learning.
            </p>
           
            
          </div>
					<div className="mt-8 lg:mt-0">
						<img
							src={HeroImg}
							alt="Student resources"
							className="w-full lg:w-[400px] object-cover"
							loading="lazy"
						/>
					</div>
				</div>
				{/* Semester Section */}
				<Suspense fallback={<SemSkeliton />}>
					<Semester />
				</Suspense>

				{/** Pdf Note upload and Ideas Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 mt-20 border-t pt-20">
  {/* File Upload Section */}
  <Link to={'https://forms.gle/NjPc8drV3ZGUguHy9'} className="order-1 lg:order-2">
  <div className="flex flex-col justify-center items-center h-full  rounded-3xl p-10 shadow-md hover:shadow-lg transition-shadow relative">
    {/* Gradient Border */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-400 to-indigo-700 p-[2px]">
      <div className="h-full w-full rounded-3xl bg-slate-50"></div>
    </div>
    {/* Content */}
    <h2 className="relative text-xl font-bold text-gray-700 z-10">Upload File</h2>
  </div>
</Link>



  {/* Idea Upload Section */}
  <div className="space-y-6 lg:space-y-8 py-10  order-2 lg:order-1  mt-6 md:mt-0 ">
    <h3 className="text-lg font-semibold text-gray-800">Have an Idea?</h3>
    <p className="text-gray-600">
      Share your thoughts and help us improve the platform for everyone.
    </p>
    <button
      onClick={openModal}
      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors flex items-center"
    >
      <Lightbulb className="mr-2 h-5 w-5" />
      Share Your Idea
    </button>
  </div>

  {/* Modal Component */}
  <Model isOpen={isModalOpen} onClose={closeModal} />
</div>

		
			</section>
		</>
	);
};

export default Home;
