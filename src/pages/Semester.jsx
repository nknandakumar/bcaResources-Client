import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Skelton from './../components/UI/SemSkeliton';
import axios from "axios";

const fetchSemesters = async () => {
	const response = await axios.get(`http://localhost:3000/`);
	return response.data;
};

const Semester = () => {
	const { data: semesters, isLoading, isError, error } = useQuery({
		queryKey: ["semesters"],
		queryFn: fetchSemesters,
	});

	if (isLoading) return <Skelton />;
	if (isError) return <p className="text-red-500">Error: {error.message}</p>;

	return (
		<section className="mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6 lg:mx-auto relative">
			{semesters.map((sem) => (
				<Link to={`/subject/${sem.id}`} key={sem.id}>
					<div className="sem-card">
						<h2 className="text-xl lg:text-3xl font-bold">{sem.name}</h2>
					</div>
				</Link>
			))}
		</section>
	);
};

export default Semester;
