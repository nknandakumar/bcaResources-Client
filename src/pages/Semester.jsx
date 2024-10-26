import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Skelton from './../components/UI/SemSkeliton';

const Semester = () => {
	const [semester, setSemester] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://localhost:3000/`);
				setSemester(response.data);
			} catch (error) {
				console.error("Error fetching subjects:", error);
			}
		};
		fetchData();
	}, []);
	return (
		<section className=" mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6  lg:mx-auto relative  ">
			{
				semester.length == 0 ? (
                       <Skelton/>
				) :(
					semester.map((sem) => (
						<Link to={`/subject/${sem.id}`} key={sem.id}>
							<div className="sem-card  ">
								<h2 className="text-xl lg:text-3xl font-bold">{sem.name}</h2>
							</div>
						</Link>
					))
				)
			}
		</section>
	);
};

export default Semester;
