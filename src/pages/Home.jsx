import { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga4';
import { Lightbulb } from "lucide-react";

import HeroImg from "../assets/HeroImage.webp";
import SemSkeliton from "../components/UI/SemSkeliton";
import Chatbot from "../components/ChatBot";
import Model from "../components/Explore";
import NavBar from './../components/NavBar';

const Semester = lazy(() => import("./Semester"));

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        ReactGA.event({
            category: 'Button',
            action: 'Idea Button',
            label: 'idea',
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleClick = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Resource Upload Button',
            label: 'Upload Page',
        });
    };

    return (
        <div className="min-h-screen ">
            <Chatbot />
            <NavBar />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <div className="space-y-6 text-center  md:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-gray-900 leading-tight">
                            BCA Library
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
                                Access Question Papers and Notes
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            Discover comprehensive study materials, past papers, and resources organized by semester. 
                            Enhance your learning journey with our AI-powered assistance and instant support.
                        </p>
                    </div>
                    
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={HeroImg}
                            alt="Student resources"
                            className="w-full max-w-md rounded-lg "
                            loading="lazy"
                        />
                    </div>
                </section>

                {/* Semester Section */}
                <Suspense fallback={<SemSkeliton />}>
                    <Semester />
                </Suspense>

                {/* Resource Section */}
                <section className="grid md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-gray-200">
                    {/* File Upload Section */}
                    <Link 
                        to="https://forms.gle/NjPc8drV3ZGUguHy9" 
                        onClick={handleClick}
                        className="group  "
                    >
                        <div className="bg-slate-50 border h-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center hover:bg-gradient-to-br hover:from-indigo-100 hover:to-purple-100">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-700">
                                Upload Notes
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Share your study materials
                            </p>
                        </div>
                    </Link>

                    {/* Idea Upload Section */}
                    <div className=" bg-slate-50 border rounded-xl shadow-md p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Have an Idea?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Share your innovative thoughts and help us improve the platform for everyone.
                            </p>
                        </div>
                        
                        <button
                            onClick={openModal}
                            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors flex items-center justify-center space-x-2"
                        >
                            <Lightbulb className="h-5 w-5" />
                            <span>Share Your Idea</span>
                        </button>
                    </div>
                </section>
            </div>

            {/* Idea Modal */}
            <Model isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Home;