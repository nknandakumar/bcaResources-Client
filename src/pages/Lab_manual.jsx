import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// Code Files
import FcPrograms from "../Data/FcLab";
import CPrograms from "../Data/cLabs";
import javaPrograms from "../Data/javaLab";
import DsPrograms from "../Data/DsLab";
// External Libraries
import { Clipboard, ClipboardCheck,ArrowBigLeftDash } from "lucide-react";
import axios from "axios";
import NavBar from "../components/NavBar";

const Lab_manual = () => {
	const { sem_id } = useParams();
	const [selectedSub, setSelectedSub] = useState(null); // State for selected subject
	const [copiedCodeId, setCopiedCodeId] = useState(null); // State to track copied code
	const [semKey, setSemKey] = useState();

	useEffect(() => {
		const fetchSem = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/lab_manual/${sem_id}`
				);
				if (
					response.data &&
					Array.isArray(response.data) &&
					response.data.length > 0
				) {
					setSemKey(response.data);
				} else {
					console.error("Unexpected data format:", response.data);
				}
			} catch (error) {
				console.log(error + "server error");
			}
		};
		fetchSem();
	}, [sem_id]);

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
		const targetProgram = document.getElementById(programId);
		if (targetProgram) {
			targetProgram.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Handle copy functionality
	const handleCopy = (text, id) => {
		navigator.clipboard.writeText(text);
		setCopiedCodeId(id);
		setTimeout(() => setCopiedCodeId(null), 2000);
	};

	return (
		<>
    <NavBar/>
			<Link to={`/subject/${sem_id}`}>
				<div className="sticky top-0 py-2 bg-gradient-to-r from-gray-50 to-cyan-50 z-10">
					<ArrowBigLeftDash className="text-6xl font-bold" />
				</div>
			</Link>
			<div className="min-h-screen p-2 md:p-6">
				<h1 className="text-2xl md:text-3xl flex justify-center font-bold text-center text-blue-600 mb-6 md:mb-8">
					Semester{" "}
					{semKey && semKey[0] ? (
						<span className="text-stone-500 mx-2">{semKey[0].sem_key}</span>
					) : (
						"Loading..."
					)}{" "}
					Lab Manual
				</h1>

				{/* Display subjects if semester data and semKey are available */}
				{semKey && semKey[0] && semesterData[semKey[0].sem_key] ? (
					<div className="mb-6">
						<h2 className="text-xl font-semibold">Select a Subject:</h2>
						<div className="flex space-x-4">
							{semesterData[semKey[0].sem_key].map((subject, index) => (
								<button
									key={index}
									onClick={() => handleSubjectClick(subject)}
									className="px-4 py-2 rounded-md bg-indigo-300 font-bold my-2 shadow-md transform transition-transform hover:duration-300 hover:scale-105 hover:bg-indigo-400"
								>
									{subject.name}
								</button>
							))}
						</div>
					</div>
				) : (
					<p>Loading subjects...</p>
				)}

				{/* Display Lab Programs if a subject is selected */}
				{selectedSub && (
					<div className="sticky top-10 z-10 flex justify-center">
						<ul className="inline-flex p-2 rounded-md bg-indigo-50 gap-2 flex-wrap">
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
												className="absolute top-2 right-2 bg-white p-2 rounded-md"
											>
												{copiedCodeId === program.id ? (
													<ClipboardCheck className="text-green-500" />
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
