import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";
import axios from "axios";
import Card from "../components/UI/Card";
import Skelton from "../components/UI/Skeliton";

const fetchSubjects = async (sem_id) => {
	const response = await axios.get(`http://localhost:3000/subjects/${sem_id}`);
	return response.data;
};

const SubjectPage = () => {
	const { sem_id } = useParams();
	const { data: subjects, isLoading, isError, error } = useQuery({
		queryKey: ["subjects", sem_id],
		queryFn: () => fetchSubjects(sem_id),
	});

	if (isLoading) return <Skelton/>;
	if (isError) return <p className="text-red-500">Error: {error.message}</p>;

	return (
		<>
			<Link to={"/"}>
				<div className="sticky top-0 py-2 bg-gradient-to-r from-gray-50 to-cyan-50 z-10">
					<CircleArrowLeft className="text-6xl font-bold" />
				</div>
			</Link>
			<h1 className="text-center text-4xl font-bold">Semester {sem_id}</h1>
			<section className="mt-10 lg:px-32 lg:mx-auto relative">
				<Link to={`/lab_manuals/${sem_id}`}>
					<button className="btnHover px-4 py-2 text-lg text-white block rounded-md bg-indigo-500">
						Click here for Lab Manuals
					</button>
				</Link>

				<h2 className="py-4 text-2xl">Subjects :</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
					{subjects.map((subject) => (
						<Card
							key={subject.id}
							name={subject.name}
							paper={"Paper"}
							notes={"Notes"}
							paper_Path={`/subject/papers/${sem_id}/${subject.id}`}
							notes_path={`/subject/notes/${sem_id}/${subject.id}`}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default SubjectPage;
