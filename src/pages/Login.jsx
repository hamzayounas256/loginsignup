import Button from "../components/Button";
import Social from "../components/Social";

export default function Login() {
	return (
		<div className="w-full mx-auto py-8 px-4 min-h-screen flex items-center justify-center">
			<div className="w-full max-w-lg">
				<form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
					<h1 className="text-center text-2xl font-bold mb-8 text-gray-800">
						Welcome Back
					</h1>

					{/* Social Login Buttons */}
					<Social />

					{/* Divider */}
					<div className="relative mb-8">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-white text-gray-500">
								Or continue with
							</span>
						</div>
					</div>

					{/* form for data entry */}
					<div className="mb-6">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="username"
						>
							Username
						</label>
						<input
							className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
							id="username"
							type="text"
							placeholder="Enter your username"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
							id="password"
							type="password"
							placeholder="Enter your password"
						/>
					</div>
					<div className="flex items-center justify-between">
						{/* <button
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
							type="button"
						>
							Sign In
						</button> */}
						<Button text="Sign in" onClick={"/signup"} />
						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600 transition-colors"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
				</form>
				<p className="text-center text-gray-500 text-sm">
					Don&apos;t have an account?
					<a
						href="#"
						className="text-blue-500 hover:text-blue-600 font-semibold"
					>
						Sign up
					</a>
				</p>
				<p className="text-center text-gray-500 text-xs mt-4">
					&copy;2025 All rights reserved.
				</p>
			</div>
		</div>
	);
}
