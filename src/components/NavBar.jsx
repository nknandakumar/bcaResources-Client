
import { BookOpen } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="sticky top-0  backdrop-blur-md border-b z-50">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center hover:scale-105 transition-transform duration-300">
            {/** Logo */}
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-2xl lg:text-3xl font-bold">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                BCA
              </span>
              <span className="text-gray-700"> Resources</span>
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-4">
            {['Resources', 'Notes', 'About'].map((item) => (
              <button
                key={item}
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors hover:bg-indigo-50 rounded-lg"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;