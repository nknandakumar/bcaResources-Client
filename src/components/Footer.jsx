import { useState } from "react";


const Footer = () => {
	const [year] = useState(new Date().getFullYear());


	return (
		<footer className="bg-white border-t-2 mt-10">

				<div className="mt-4 py-4 mb-2 md:py-8  text-center text-gray-600">
					<p>&copy; {year} BCA Resources. All rights reserved.</p>
				</div>

		</footer>
	);
};

export default Footer;
