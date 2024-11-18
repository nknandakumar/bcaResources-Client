import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Skelton from "./../components/UI/SemSkeliton";
import axios from "axios";
import Chatbot from "../components/ChatBot";
import { Book, ChevronRight } from "lucide-react";

const fetchSemesters = async () => {
	const response = await axios.get(import.meta.env.VITE_BACKEND_CONNECTION_URL);

	return response.data;
};

const Semester = () => {
	const {
		data: semesters,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["semesters"],
		queryFn: fetchSemesters,
		onSuccess: (data) => {
			localStorage.setItem("semesters", JSON.stringify(data));
		},
		initialData: () => {
			const storedSemesters = localStorage.getItem("semesters");
			return storedSemesters ? JSON.parse(storedSemesters) : undefined;
		},
	});

	if (isLoading) return <Skelton />;
	if (isError) return <p className="text-red-500">Error: {error.message}</p>;

	return (
		<>
			<Chatbot />
			<section className="mt-32 ">
			

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {semesters.map((sem) => (
					<div
					key={sem.id}
					className="group relative border border-gray-200 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 overflow-hidden"
				>
					{/* Decorative Accent */}
					<div className="absolute inset-0 w-full h-1 rounded-t-xl   bg-indigo-600 "></div>
				
					{/* Header Section */}
					<div className="flex items-center space-x-3 mb-4">
						<div className="bg-indigo-100 text-indigo-600 p-2 rounded-full">
							<Book className="h-5 w-5" />
						</div>
						<h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
							{sem.name}
						</h3>
					</div>
				
					{/* Description */}
					<p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
						<span className="font-medium">Notes</span> <br />
						<span className="font-medium">Past Question Papers</span> 
					</p>
				
					{/* Call-to-Action Button */}
					<Link to={`/subject/${sem.id}`}>
						<button className="w-full px-4 py-3 text-sm md:text-base font-medium text-white  bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center transition-all duration-300">
							View Resources
							<ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</button>
					</Link>
				</div>
				
				))}
        </div>
		
			</section>
		</>
	);
};

export default Semester;
