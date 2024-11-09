import { Link, useParams } from "react-router-dom";
import { ArrowBigLeftDash } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skelton from "../components/UI/Skeliton";
import NavBar from "../components/NavBar";
import Chatbot from "../components/ChatBot";
import { useEffect } from "react";

const Papers = () => {
  const { sem_id, sub_id } = useParams();

  // Define the function to fetch papers with sub_id parameter
  const fetchPapers = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/subject/papers/${sub_id}`
    );
    localStorage.setItem(`papers_${sub_id}`, JSON.stringify(data));
    return data;
  };

  // Get data from local storage if available
  const storedPapers = localStorage.getItem(`papers_${sub_id}`);
  const initialData = storedPapers ? JSON.parse(storedPapers) : null;

  // Use sub_id in the query key to refetch when it changes
  const {
    data: papers,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["papers", sub_id],
    queryFn: fetchPapers,
    initialData,
    enabled: !!sub_id, // Only run if sub_id is present
  });

  // Update local storage when data is fetched
  useEffect(() => {
    if (papers) {
      localStorage.setItem(`papers_${sub_id}`, JSON.stringify(papers));
    }
  }, [papers, sub_id]);

  if (isLoading && !initialData)
    return (
      <div>
        <Skelton />
      </div>
    );
  if (isError) return <div>Error fetching papers: {error.message}</div>;

  return (
    <>
      <Chatbot />
      <div className="sticky top-0 bg-gradient-to-r from-gray-50 to-cyan-50 z-10">
        <NavBar />
        <Link to={`/subject/${sem_id}`}>
          <div className="py-2 bg-gradient-to-r from-gray-50 to-cyan-50 z-10">
            <ArrowBigLeftDash className="text-6xl font-bold" />
          </div>
        </Link>
      </div>

      <h1 className="text-center text-3xl lg:text-4xl font-bold">
        Question Papers
      </h1>
      <section className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-auto lg:px-32">
        {papers?.length === 0 ? (
          <p>No papers available</p>
        ) : (
          papers?.map((paper) => (
            <div
              key={paper.paper_uuid}
              className="flex flex-col p-5 justify-center border-l-8 border border-[#4a6da1] rounded-lg w-full lg:max-w-sm"
            >
              <h1 className="text-2xl font-semibold mb-4">
                {paper.paper_year} Question Paper
              </h1>
              <div className="flex space-x-4">
                <a
                  href={paper.paper_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative inline-block font-medium group py-1.5 px-2.5">
                    <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-y-1 translate-x-1 bg-[#4a6da1] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border border-[#4a6da1] group-hover:bg-indigo-50"></span>
                    <span className="relative text-[#4a6da1]">View</span>
                  </button>
                </a>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default Papers;
