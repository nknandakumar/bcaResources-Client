import Card from "../components/UI/Card";
import {Link} from "react-router-dom"
import {CircleArrowLeft} from "lucide-react"

const Papers = () => {
	return (
		<>
			{" "}
			<Link to={"/subject"}>
				<div className="sticky top-0 py-2  bg-gradient-to-r from-gray-50 to-cyan-50  z-10">
					<CircleArrowLeft className=" text-6xl font-bold" />
				</div>
			</Link>
			<section className=" my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6   lg:mx-auto relative  lg:px-32 ">
				<Card name={"2024"} paper={"View"} notes={"Download"} />
				<Card name={"2023"} paper={"View"} notes={"Download"} />
				<Card name={"2022"} paper={"View"} notes={"Download"} />
			</section>
		</>
	);
};

export default Papers;
