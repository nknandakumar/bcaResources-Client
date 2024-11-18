import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
//import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import Papers from "./pages/Papers";
import Notes from "./pages/Notes";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Lab_manual from "./pages/Lab_manual";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



// Create a query client
const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
	
				<>
				
					<div className="container mx-auto px-4 lg:px-6 ">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/subject/:sem_id" element={<Subject />} />
							<Route path="/subject/papers/:sem_id/:sub_id" element={<Papers />} />
							<Route path="/subject/notes/:sem_id/:sub_id" element={<Notes />} />
							<Route path="/lab_manuals/:sem_id" element={<Lab_manual />} />

							<Route path="*" element={<Error />} />
						</Routes>
					</div>
					<Footer />
				</>
				
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
