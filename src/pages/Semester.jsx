import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Skelton from "./../components/UI/SemSkeliton";
import axios from "axios";
import Chatbot from "../components/ChatBot";
import { Book, ChevronRight } from "lucide-react";

const fetchSemesters = async () => {
	const response = await axios.get(`http://localhost:3000/`);
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
						className="group border-l-8 border border-indigo-500 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6"
					>
						<div className="flex items-center space-x-2 mb-4">
							<Book className="h-5 w-5 text-indigo-600" />
							<h3 className="text-xl font-bold"> {sem.name}</h3>
						</div>
						<p className="text-gray-600 mb-4">
							 Notes <br /> Past Question papers 
						</p>
						<Link to={`/subject/${sem.id}`}>
							<button className="w-full px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors flex items-center justify-center group">
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
