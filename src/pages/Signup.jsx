import Button from "../components/Button";
import Social from "../components/Social";

export default function Signup() {
	return (
		<div className="w-full mx-auto py-8 px-4">
			<div className="w-full max-w-lg mx-auto">
				<form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
					<h1 className="text-center text-2xl font-bold mb-8 text-gray-800">
						Register
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
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-first-name"
							>
								First Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								id="grid-first-name"
								type="text"
								placeholder="Yaqoob"
							/>
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-last-name"
							>
								Last Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								id="grid-last-name"
								type="text"
								placeholder="Mushtaq"
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-password"
							>
								Password
							</label>
							<input
								className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								id="grid-password"
								type="password"
								placeholder="**************"
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-2">
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-city"
							>
								City
							</label>
							<input
								className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								id="grid-city"
								type="text"
								placeholder="Islamabad"
							/>
						</div>
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-state"
							>
								Country
							</label>
							<div className="relative">
								<select
									className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
									id="grid-state"
								>
									<option>Pakistan</option>
									<option>India</option>
									<option>Bangladesh</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg
										className="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-zip"
							>
								Zip
							</label>
							<input
								className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								id="grid-zip"
								type="text"
								placeholder="55229"
							/>
						</div>
						<div className="w-full px-3 mt-8 flex items-center justify-between">
							{/* <button
								className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
								type="button"
							>
								Sign up
							</button> */}
							<Button text="Sign up" onClick={"/login"} />
							<a
								className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600 transition-colors"
								href="#"
							>
								Already have an account?
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
