import {Link} from "react-router-dom"

const Semester = () => {
	return (
		<section className=" mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6  lg:mx-auto relative  ">
			{/* Semester 1 */}
			<Link to={'/subject'} >
			<div className="sem-card  ">
				<h2 className="text-xl lg:text-3xl font-bold">Semester 1</h2>
			</div>
			</Link>
			{/* Semester 2 */}
			<div className="sem-card">
				<h2 className="text-xl lg:text-3xl font-bold">Semester 2</h2>
			</div>
			{/* Semester 3 */}
			<div className="sem-card">
				<h2 className="text-xl lg:text-3xl font-bold">Semester 3</h2>
			</div>

			<div className="sem-card">
				<h2 className="text-xl lg:text-3xl font-bold">Semester 3</h2>
			</div>

			<div className="sem-card">
				<h2 className="text-xl lg:text-3xl font-bold">Semester 3</h2>
			</div>

			<div className="sem-card">
				<h2 className="text-xl lg:text-3xl font-bold">Semester 3</h2>
			</div>
		</section>
	);
};

export default Semester;
