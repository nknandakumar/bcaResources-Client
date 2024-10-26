import Card from "../components/UI/Card";
import {Link,useParams} from "react-router-dom"
import {CircleArrowLeft} from "lucide-react"
const Notes = () => {
	const {sem_id} = useParams();
	return (
		<>
	    	<Link to={`/subject/${sem_id}`}>
				<div className="sticky top-0 py-2  bg-gradient-to-r from-gray-50 to-cyan-50  z-10">
					<CircleArrowLeft className=" text-6xl font-bold" />
				</div>
			</Link>
		<section className=" my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6   lg:mx-auto relative   lg:px-32 ">
			<Card name={"Chapter 1"} paper={"View"} notes={"Download"} />
			<Card name={"Chapter 2"} paper={"View"} notes={"Download"} />
			<Card name={"Chapter 3"} paper={"View"} notes={"Download"} />
		</section>
		</>
	);
};

export default Notes;
