import { useState } from "react";
import { useParams, Link } from "react-router-dom";
// Code Files
import FcPrograms from "../Data/FcLab";
import CPrograms from "../Data/cLabs";
import javaPrograms from "../Data/javaLab";
import DsPrograms from "../Data/DsLab";
// External Libraries
import { Clipboard, ClipboardCheck } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircleArrowLeft } from "lucide-react";

const Lab_manual = () => {
	const [selectedSub, setSelectedSub] = useState(null); // State for selected subject
	const [copiedCodeId, setCopiedCodeId] = useState(null); // State to track copied code

	const { sem_id } = useParams();
	// Lab Manuals data per semester
	const semesterData = {
		1: [
			{ name: "FC Lab Manual", data: FcPrograms },
			{ name: "C Lab Manual", data: CPrograms },
		],
		2: [
			{ name: "Java Lab Programs", data: javaPrograms },
			{ name: "DS Lab Programs", data: DsPrograms },
		],
	};

	// Handle subject click
	const handleSubjectClick = (subject) => {
		setSelectedSub(subject);
	};

	// Handle program navigation without changing the URL
	const handleProgramClick = (programId) => {
		// Scroll to the program using scrollIntoView
		const targetProgram = document.getElementById(programId);
		if (targetProgram) {
			targetProgram.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Handle copy functionality
	const handleCopy = (text, id) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setCopiedCodeId(id); // Show ClipboardCheck icon
				toast.success("Code copied!", { position: toast.POSITION.TOP_RIGHT });

				// Revert the icon back to Clipboard after 1 second
				setTimeout(() => {
					setCopiedCodeId(null);
				}, 1000);
			})
			.catch(() => {
				toast.error("Failed to copy!", { position: toast.POSITION.TOP_RIGHT });
			});
	};

	return (
		<>
			<Link to={"/subject"}>
				<div className="sticky top-0 py-2  bg-gradient-to-r from-gray-50 to-cyan-50  z-10">
					<CircleArrowLeft className=" text-6xl font-bold" />
				</div>
			</Link>
			<div className="min-h-screen p-2 md:p-6">
				<h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6 md:mb-8">
					Lab Manuals
				</h1>

				{/* Display subjects if a semester is selected */}
				{sem_id && (
					<div className="mb-6">
						<h2 className="text-xl font-semibold">Select a Subject:</h2>
						<div className="flex space-x-4">
							{semesterData[sem_id].map((subject, index) => (
								<button
									key={index}
									onClick={() => handleSubjectClick(subject)}
									className="px-4 py-2 rounded-md bg-indigo-300 font-bold my-2 shadow-md transform transition-transform hover:duration-300 hover:scale-105 hover:bg-indigo-400 "
								>
									{subject.name}
								</button>
							))}
						</div>
					</div>
				)}

				{/* Display Lab Programs if a subject is selected */}
				{selectedSub && (
					<div className="sticky top-10   z-10 flex justify-center">
						<ul className=" inline-flex p-2 rounded-md bg-indigo-50 gap-2 flex-wrap">
							{selectedSub.data.map((program) => (
								<button
									key={program.id}
									onClick={() => handleProgramClick(program.id)}
									className="p-2 bg-neutral-50 rounded-md shadow-indigo-500/40"
								>
									{program.id}
								</button>
							))}
						</ul>
					</div>
				)}

				<div>
					{/* Display Lab Programs if a subject is selected */}
					{selectedSub && (
						<>
							<h3 className="text-lg font-bold mb-4">{selectedSub.name}</h3>
							<div className="grid grid-cols-1 gap-4">
								{selectedSub.data.map((program) => (
									<div
										id={program.id}
										key={program.id}
										className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
									>
										<h4 className="text-lg font-semibold mb-2 text-gray-800">
											{program.name}
										</h4>
										<div className="relative mb-4">
											<pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
												{program.code}
											</pre>
											<button
												onClick={() => handleCopy(program.code, program.id)}
												className="absolute top-2 right-2"
											>
												{copiedCodeId === program.id ? (
													<ClipboardCheck />
												) : (
													<Clipboard />
												)}
											</button>
										</div>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Lab_manual;
