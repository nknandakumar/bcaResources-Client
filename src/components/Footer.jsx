import { useState } from "react";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-white  border-t-2 mt-10 flex flex-col  justify-center items-center">
      <div className="flex items-center mt-6 space-x-2">
        <div className="flex items-center">
		<svg
          className="rounded-full border-2 p-2 transition-all shadow-lg  duration-300 group-hover:scale-110"
          width="40"
          height="40"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0065 56.1236H21.4893V35.5227L9.37109 26.4341V52.4881C9.37109 54.4997 11.001 56.1236 13.0065 56.1236Z"
            fill="#4285F4"
          />
          <path
            d="M50.5732 56.1236H59.056C61.0676 56.1236 62.6914 54.4937 62.6914 52.4881V26.4341L50.5732 35.5227"
            fill="#34A853"
          />
          <path
            d="M50.5732 19.7693V35.5229L62.6914 26.4343V21.587C62.6914 17.0912 57.5594 14.5282 53.9663 17.2245"
            fill="#FBBC04"
          />
          <path
            d="M21.4893 35.5227V19.769L36.0311 30.6754L50.5729 19.769V35.5227L36.0311 46.429"
            fill="#EA4335"
          />
          <path
            d="M9.37109 21.587V26.4343L21.4893 35.5229V19.7693L18.0962 17.2245C14.4971 14.5282 9.37109 17.0912 9.37109 21.587Z"
            fill="#C5221F"
          />
        </svg>
			<div className="bg-gray-200 w-8 h-1"></div>
		</div>
        <span className=" text-slate-500 font-medium">bcaresource2024@gmail.com</span>
      </div>

      <div className=" py-6 md:py-8 text-center text-gray-600">
        <p className=" text-black uppercase font-semibold" >&copy; {year} <span className="  text-blue-700 "> BCA Resources</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;