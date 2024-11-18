import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
	Clipboard,
	ClipboardCheck,
	ArrowBigLeftDash,
	BookOpen,
	Code,
	Database,
	Monitor,
	Terminal,
	CheckCircle2,
	Album
} from "lucide-react";
import axios from "axios";

// Import your data
import FcPrograms from "../Data/FcLab";
import CPrograms from "../Data/cLabs";
import javaPrograms from "../Data/javaLab";
import DsPrograms from "../Data/DsLab";
import NavBar from "../components/NavBar";
import Chatbot from "../components/ChatBot";

const LabManual = () => {
	const { sem_id } = useParams();
	const [selectedSub, setSelectedSub] = useState(null);
	const [copiedCodeId, setCopiedCodeId] = useState(null);
	const [semKey, setSemKey] = useState();

	useEffect(() => {
		const fetchSem = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_BACKEND_CONNECTION_URL}/lab_manual/${sem_id}`
				);
				if (
					response.data &&
					Array.isArray(response.data) &&
					response.data.length > 0
				) {
					setSemKey(response.data);
				}
			} catch (error) {
				console.log(error + "server error");
			}
		};
		fetchSem();
	}, [sem_id]);

	const semesterData = {
		1: [
			{
				name: "FC Lab Manual",
				data: FcPrograms,
				icon: <Monitor className="w-5 h-5" />,
			},
			{
				name: "C Lab Manual",
				data: CPrograms,
				icon: <Terminal className="w-5 h-5" />,
			},
		],
		2: [
			{
				name: "Java Lab Programs",
				data: javaPrograms,
				icon: <Code className="w-5 h-5" />,
			},
			{
				name: "DS Lab Programs",
				data: DsPrograms,
				icon: <Database className="w-5 h-5" />,
			},
		],
	};

	const handleSubjectClick = (subject) => {
		setSelectedSub(subject);
	};

	const handleProgramClick = (programId) => {
		const targetProgram = document.getElementById(programId);
		if (targetProgram) {
			targetProgram.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleCopy = (text, id) => {
		navigator.clipboard.writeText(text);
		setCopiedCodeId(id);
		setTimeout(() => setCopiedCodeId(null), 2000);
	};

	return (
		<>
		  <Chatbot/>
			<NavBar />
			<div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
				{/* Back Button */}
				<Link to={`/subject/${sem_id}`}>
					<div className="sticky top-0 py-2 bg-white/80 backdrop-blur-sm border-b  z-10">
						<div className="container mx-auto px-4">
							<div className="group flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300">
								<ArrowBigLeftDash className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" />
								<span className="ml-2 text-sm font-medium">
									Back to Subjects
								</span>
							</div>
						</div>
					</div>
				</Link>

				<div className="container mx-auto px-4 py-6">
					{/* Header */}
					<div className="flex items-center justify-center mb-8">
						< Album className="w-8 h-8 text-indigo-600 mr-3" />
						<h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
							Semester{" "}
							{semKey && semKey[0] ? (
								<span className="text-indigo-600">{semKey[0].sem_key}</span>
							) : (
								"Loading..."
							)}{" "}
							Lab Manual
						</h1>
					</div>

					{/* Subject Selection */}
					{semKey && semKey[0] && semesterData[semKey[0].sem_key] && (
						<div className="mb-8">
							<h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
								<BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
								Select a Subject:
							</h2>
							<div className="flex flex-wrap gap-4">
								{semesterData[semKey[0].sem_key].map((subject, index) => (
									<button
										key={index}
										onClick={() => handleSubjectClick(subject)}
										className={`flex items-center px-6 py-3 rounded-lg font-medium
                      transform transition-all duration-300 ease-out hover:scale-105
                      ${
												selectedSub?.name === subject.name
													? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
													: "bg-white hover:bg-indigo-50 text-gray-700 border border-indigo-100 shadow-sm hover:shadow-md"
											}`}
									>
										<span className="mr-2">{subject.icon}</span>
										{subject.name}
									</button>
								))}
							</div>
						</div>
					)}

					{/* Program Navigation */}
					{selectedSub && (
						<div className="sticky top-16 z-10 mb-8 animate-fadeIn">
							<div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-100 p-4">
								<div className="flex items-center mb-4">
									<Code className="w-5 h-5 text-indigo-600 mr-2" />
									<h3 className="text-lg font-semibold text-gray-700">
										Programs
									</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{selectedSub.data.map((program) => (
										<button
											key={program.id}
											onClick={() => handleProgramClick(program.id)}
											className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 
                        text-indigo-600 rounded-lg transition-all duration-300 
                        hover:shadow-md transform hover:scale-105"
										>
											{program.id}
										</button>
									))}
								</div>
							</div>
						</div>
					)}

					{/* Programs Display */}
					{selectedSub && (
						<div className="space-y-6 animate-fadeIn">
							{selectedSub.data.map((program) => (
								<div
									id={program.id}
									key={program.id}
									className="bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden 
                    transform transition-all duration-300 hover:shadow-xl"
								>
									<div className="bg-gradient-to-r from-gray-50 to-indigo-50/30 p-4 flex items-center justify-between border-b border-indigo-100">
										<div className="flex items-center">
											<Terminal className="w-5 h-5 text-indigo-600 mr-2" />
											<h4 className="text-lg font-semibold text-gray-800">
												{program.name}
											</h4>
										</div>
										{copiedCodeId === program.id && (
											<div className="flex items-center text-green-500 text-sm">
												<CheckCircle2 className="w-4 h-4 mr-1" />
												Copied!
											</div>
										)}
									</div>
									<div className="relative">
										<pre className="bg-gray-900 text-gray-100 p-6 overflow-x-auto font-mono text-sm leading-relaxed">
											{program.code}
										</pre>
										<button
											onClick={() => handleCopy(program.code, program.id)}
											className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 
                        hover:bg-white/20 transition-all duration-300 group"
											title="Copy code"
										>
											{copiedCodeId === program.id ? (
												<ClipboardCheck className="w-5 h-5 text-green-400" />
											) : (
												<Clipboard className="w-5 h-5 text-gray-400 group-hover:text-white" />
											)}
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			
		</>
	);
};

export default LabManual;
