import { Suspense, lazy } from "react";
import HeroImg from "../assets/HeroImage.webp";
import SemSkeliton from "../components/UI/SemSkeliton";


const Semester = lazy(() => import("./Semester"));

const Home = () => {
	return (
		<>
			<section className="p-6 lg:p-32">
				<div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10">
					<div className="text-center lg:text-left max-w-3xl">
						<h1 className="heroFont text-4xl lg:text-6xl font-extrabold mb-4 font-[navFont] text-[#2D2F31]">
							Welcome to the Student Resource Hub!
						</h1>
						<p className="text-sm lg:text-lg text-gray-600 lg:pr-32">
							Access the last three years exam papers and study notes, organized
							by semester and subject. Prepare for exams or revisit materials
							with ease.
						</p>
					</div>
					<div className="mt-8 lg:mt-0">
						<img
							src={HeroImg}
							alt="Student resources"
							className="w-full lg:w-[400px] object-cover"
							loading="lazy"
						/>
					</div>
				</div>
				{/* Semester Section */}
				<Suspense fallback={<SemSkeliton />}>
					<Semester />
				</Suspense>
		
			</section>
		</>
	);
};

export default Home;
