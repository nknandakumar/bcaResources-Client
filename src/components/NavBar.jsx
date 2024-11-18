
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="sticky top-0  backdrop-blur-md border-b z-50">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={'/'}>
          <div className="flex items-center ">
            {/** Logo */}
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-2xl lg:text-3xl font-bold">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                BCA
              </span>
              <span className="text-gray-700"> Resources</span>
            </h1>
          </div>
          </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default NavBar;