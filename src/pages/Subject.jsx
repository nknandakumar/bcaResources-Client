import { useState, useEffect } from "react";
import Card from "../components/UI/Card";
import { Link, useParams } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";
import axios from "axios";

// Renamed the local component to avoid conflict
const SubjectPage = () => {
	const [Subjects, setSubjects] = useState([]);
	const { sem_id } = useParams();

	useEffect(() => {
		const fetchSubjects = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/subjects/${sem_id}`
				);
				setSubjects(response.data);
			} catch (error) {
				console.error("Error fetching subjects:", error);
			}
		};
		fetchSubjects();
	}, [sem_id]);

	return (
		<>
			<Link to={"/"}>
				<div className="sticky top-0 py-2 bg-gradient-to-r from-gray-50 to-cyan-50 z-10">
					<CircleArrowLeft className="text-6xl font-bold" />
				</div>
			</Link>
                 <h1 className=" text-center text-4xl font-bold " >Semester {sem_id}</h1>
			<section className="mt-10 lg:px-32 lg:mx-auto relative">
				<Link to={`/lab_manuals/${sem_id}`}>
					<button className="btnHover px-4 py-2 text-lg text-white block rounded-md bg-indigo-500">
						Click here for Lab Manuals
					</button>
				</Link>

				<h2 className="py-4 text-2xl">Subjects :</h2>

				{/* SUBJECTS CARD SECTION */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
					{Subjects.map((subject) => (
						<Card
							key={subject.id}
							name={subject.name}
							paper={"Paper"}
							notes={"Notes"}
							paper_Path={`/subject/papers/${sem_id}/${subject.id}`}
							notes_path={`/subject/notes/${sem_id}`}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default SubjectPage;
