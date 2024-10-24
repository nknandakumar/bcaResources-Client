const NavBar = () => {
	return (
		<nav className="flex  justify-center flex-col items-center py-4 px-2 lg:px-4x text-black top-0 left-0 right-0 z-10 static">
			{/* <img src={logo} alt="Logo" className="w-12 h-12" /> */}
			<h1 className="text-2xl lg:text-3xl  text-black font-bold font-[ navFont]">
				<span className="bg-gradient-to-r  from-gray-700 via-gray-100 to-gray-700 bg-clip-text text-transparent">
					BCA
				</span>{" "}
				- Resources
			</h1>
			<div className="flex justify-between items-center w-full mt-4 ">
				{/* Left Circle */}
				<div className="">➕</div>

				{/* Line */}
				<div className="flex-grow h-[1px] bg-gray-500 mx-0"></div>

				{/* Right Circle */}
				<div className="">➕</div>
			</div>
		</nav>
	);
};

export default NavBar;
