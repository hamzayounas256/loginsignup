export default function Button({ text, onClick }) {
	const handleNavigation = (path) => {
		window.location.href = path;
	};
	return (
		<button
			className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
			type="button"
			onClick={() => handleNavigation(onClick)}
		>
			{text}
		</button>
	);
}
