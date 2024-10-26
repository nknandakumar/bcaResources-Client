import Button from "./Button";

const Card = ({ name, paper, notes, paper_Path, notes_path, url }) => {
	return (
		<div className="flex flex-col p-5 justify-center border-l-8 border border-[#4a6da1] rounded-lg w-full lg:max-w-sm">
			<h1 className="text-2xl lg:text-2xl mt-2 font-semibold text-left mb-4">
				{name}
			</h1>
			<div className="flex justify-start mt-4 space-x-4">
				<Button btnName={paper} to={paper_Path} url={url} />
				<Button btnName={notes} to={notes_path} url={url} />
			</div>
		</div>
	);
};

export default Card;
