import Button from "../components/Button";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
			<h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome</h1>
			<div className="flex flex-col sm:flex-row gap-4">
				<Button text="Login" onClick={"/login"} />
				<Button text="Sign up" onClick={"/signup"} />
			</div>
		</div>
	);
}
