import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";
import axios from "axios";

const Papers = () => {
  const [papers, setPapers] = useState([]);
  const { sem_id, sub_id } = useParams();

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/subject/papers/${sub_id}`);
        setPapers(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchPapers();
  }, [sub_id]);

  // Function to handle downloading PDF directly
  const handleDownloadPdf = (url, name) => {
    axios
      .get(url, {
        responseType: "blob", // Important to specify blob response type
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = name || "download.pdf"; // Set the default download name
        link.click();
        // Clean up URL after download
        window.URL.revokeObjectURL(link.href);
      })
      .catch((error) => console.error("Error downloading file:", error));
  };

  // Function to handle viewing PDF by redirecting to URL
  const handleViewPdf = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Link to={`/subject/${sem_id}`}>
        <div className="sticky top-0 py-2 bg-gradient-to-r from-gray-50 to-cyan-50 z-10">
          <CircleArrowLeft className="text-6xl font-bold" />
        </div>
      </Link>
      <section className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6 lg:mx-auto relative lg:px-32">
        {papers.length === 0 ? (
          <p>No papers available</p>
        ) : (
          papers.map((paper) => (
            <div
              key={paper.id}
              className="flex flex-col p-5 justify-center border-l-8 border border-[#4a6da1] rounded-lg w-full lg:max-w-sm"
            >
              <h1 className="text-2xl lg:text-2xl mt-2 font-semibold text-left mb-4">
                {paper.year}
              </h1>
              <div className="flex justify-start mt-4 space-x-4">
                <button
                  onClick={() => handleViewPdf(paper.paper_url)}
                  className="relative inline-block font-medium group py-1.5 px-2.5"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-y-1 translate-x-1 bg-[#4a6da1] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border border-[#4a6da1] group-hover:bg-indigo-50"></span>
                  <span className="relative text-[#4a6da1]">View</span>
                </button>
                <button
                  onClick={() => handleDownloadPdf(paper.paper_url, `${paper.year}.pdf`)}
                  className="relative inline-block font-medium group py-1.5 px-2.5"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-y-1 translate-x-1 bg-[#4a6da1] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border border-[#4a6da1] group-hover:bg-indigo-50"></span>
                  <span className="relative text-[#4a6da1]">Download</span>
                </button>
              </div>
            </div>
          ))
        )}
      </section>
   
    </>
  );
};

export default Papers;
