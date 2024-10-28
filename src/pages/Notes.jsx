import { Link, useParams } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import Skelton from "../components/UI/Skeliton";

const Notes = () => {
	const { sem_id, sub_id } = useParams();

	// Fetch function for notes
	const fetchNotes = async () => {
		const { data } = await axios.get(`http://localhost:3000/subject/notes/${sub_id}`);
		return data;
	};

	// Using useQuery to handle data fetching
	const { data: notes, isLoading, isError, error } = useQuery({
		queryKey: ['notes', sub_id],
		queryFn: fetchNotes,
		enabled: !!sub_id, // Only run if sub_id is defined
	});

	if (isLoading) return <Skelton/>;
	if (isError) return <div className="text-red-500">Error fetching notes: {error.message}</div>;

	return (
		<>
			<div className="sticky top-0 bg-gradient-to-r from-gray-50 to-cyan-50 z-10">
				<Link to={`/subject/${sem_id}`}>
					<div className="py-2">
						<CircleArrowLeft className="text-6xl font-bold" />
					</div>
				</Link>
				<h1 className="text-center text-3xl lg:text-4xl font-bold">Notes</h1>
			</div>
			<section className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-auto lg:px-32">
				{notes?.length === 0 ? (
					<p>No Notes Available</p>
				) : (
					notes?.map((note) => (
						<div
							key={note.id}
							className="flex flex-col p-5 justify-center border-l-8 border border-[#4a6da1] rounded-lg w-full lg:max-w-sm"
						>
							<h1 className="text-2xl lg:text-2xl mt-2 font-semibold text-left mb-4">
								{note.note_title}
							</h1>
							<div className="flex justify-start mt-4 space-x-4">
								{note.note_url ? (
									<a href={note.note_url} target="_blank" rel="noopener noreferrer">
										<button className="relative inline-block font-medium group py-1.5 px-2.5">
											<span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-y-1 translate-x-1 bg-[#4a6da1] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
											<span className="absolute inset-0 w-full h-full bg-white border border-[#4a6da1] group-hover:bg-indigo-50"></span>
											<span className="relative text-[#4a6da1]">View</span>
										</button>
									</a>
								) : (
									<div className="relative inline-block font-medium py-1.5 px-2.5">
										<span className="absolute rounded-md inset-0 w-full h-full bg-red-50 border border-red-500"></span>
										<span className="relative text-red-500">No Note Available</span>
									</div>
								)}
							</div>
						</div>
					))
				)}
			</section>
		</>
	);
};

export default Notes;
