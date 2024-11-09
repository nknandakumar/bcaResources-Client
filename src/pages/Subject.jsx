import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { ArrowBigLeftDash } from "lucide-react";
import axios from "axios";
import Card from "../components/UI/Card";
import Skelton from "../components/UI/Skeliton";
import NavBar from './../components/NavBar';
import Chatbot from "../components/ChatBot";
import NotesIcon from "../assets/notebook.gif"

// Fetch subjects data from the server
const fetchSubjects = async (sem_id) => {
  const response = await axios.get(`http://localhost:3000/subjects/${sem_id}`);
  return response.data;
};

const SubjectPage = () => {
  const { sem_id } = useParams();

  // Use react-query to fetch and cache subjects, with local storage as initial data
  const { data: subjects, isLoading, isError, error } = useQuery({
    queryKey: ["subjects", sem_id],
    queryFn: () => fetchSubjects(sem_id),
    onSuccess: (data) => {
      localStorage.setItem(`subjects_${sem_id}`, JSON.stringify(data)); // Save to local storage on successful fetch
    },
    initialData: () => {
      // Load from local storage if available
      const storedSubjects = localStorage.getItem(`subjects_${sem_id}`);
      return storedSubjects ? JSON.parse(storedSubjects) : undefined;
    }
  });

  if (isLoading) return <Skelton />; // Display skeleton loading component
  if (isError) return <p className="text-red-500">Error: {error.message}</p>; // Error message if fetching fails

  return (
    <>
      <div className="sticky top-0 bg-gradient-to-r from-gray-50 to-cyan-50 z-10">
        <NavBar />
        <Link to={"/"}>
          <div className="py-2 bg-gradient-to-r from-gray-50 to-cyan-50 z-10">
            <ArrowBigLeftDash className="text-6xl font-bold" />
          </div>
        </Link>
        <Chatbot />
      </div>

      <section className="mt-10 lg:px-32 lg:mx-auto relative">
        <Link to={`/lab_manuals/${sem_id}`}>
          <button className="btnHover px-4 py-2 text-lg text-white block rounded-md bg-indigo-500">
            Lab Manuals
          </button>
        </Link>
        <h2 className="py-4 text-2xl">Subjects :</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
          {subjects.map((subject) => (
            <Card
              key={subject.id}
              name={subject.name}
              paper={"Paper"}
              notes={"Notes"}
              paper_Path={`/subject/papers/${sem_id}/${subject.id}`}
              notes_path={`/subject/notes/${sem_id}/${subject.id}`}
              iconLink={NotesIcon}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SubjectPage;
