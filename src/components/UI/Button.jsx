import { Link } from "react-router-dom";

const Button = ({ btnName, to }) => {
	return (
		<Link to={to} >
			<button className="relative inline-block font-medium group py-1.5 px-2.5 ">
				<span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-y-1 translate-x-1 bg-[#4a6da1] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
				<span className="absolute inset-0 w-full h-full bg-white border border-[#4a6da1] group-hover:bg-indigo-50"></span>
				<span className="relative text-[#4a6da1] ">{btnName}</span>
			</button>
		</Link>
	);
};

export default Button;
