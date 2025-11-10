import React, { useState } from 'react'

export default function Register() {
	const [form, setForm] = useState({
		name: '',
		organization: '',
		email: '',
		contact: '',
		password: '',
		confirm: '',
	})

	function handleChange(e) {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		console.log('submit', form)
		alert('Form submitted (see console)')
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-white">
			<div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex">
				{/* Left teal panel */}
				<div className="hidden md:flex md:w-1/2 bg-[#0570c4] from-teal-400 to-teal-500 text-white p-12 items-center justify-center">
					<div className="max-w-md text-center">
						<h2 className="text-4xl font-extrabold mb-4">Welcome Back!</h2>
						<p className="mb-6 text-sm opacity-90">
							Enter your society details and manage your society all of the future events.
						</p>
						<p className="mb-8 text-xs opacity-80">If you already have an account, Please Login!</p>

									<a
										href="/login"
										className="inline-block px-10 py-3 rounded-full border-2 border-white hover:bg-white hover:text-teal-600 transition-colors text-sm"
									>
										Login
									</a>
					</div>
				</div>

				{/* Right form panel */}
				<div className="w-full md:w-1/2 p-10 lg:p-16 bg-white">
					<div className="max-w-md mx-auto">
                        <h4 className="text-3xl font-semibold text-[#0570c4] text-center mb-2">Register</h4>
						<p className="text-xs text-center mb-6">
							If you haven't an account! , Please <span className="font-bold">register!</span>
						</p>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label className="sr-only">Society Name</label>
								<input
									name="name"
									value={form.name}
									onChange={handleChange}
									placeholder="Enter Society Name"
									className="w-full bg-gray-200 placeholder-gray-600 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-300"
								/>
							</div>

							<div>
								<label className="sr-only">Organization</label>
								<input
									name="organization"
									value={form.organization}
									onChange={handleChange}
									placeholder="Enter Society Organization"
									className="w-full bg-gray-200 placeholder-gray-600 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-300"
								/>
							</div>

							<div>
								<label className="sr-only">Email</label>
								<input
									name="email"
									type="email"
									value={form.email}
									onChange={handleChange}
									placeholder="Enter Society email"
									className="w-full bg-gray-200 placeholder-gray-600 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-300"
								/>
							</div>

							<div>
								<label className="sr-only">Contact</label>
								<input
									name="contact"
									value={form.contact}
									onChange={handleChange}
									placeholder="Enter Contact number"
									className="w-full bg-gray-200 placeholder-gray-600 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-300"
								/>
							</div>

							<div>
								<label className="sr-only">Password</label>
								<input
									name="password"
									type="password"
									value={form.password}
									onChange={handleChange}
									placeholder="Enter Password"
									className="w-full bg-gray-200 placeholder-gray-600 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-300"
								/>
							</div>

							<div>
								<label className="sr-only">Confirm Password</label>
								<input
									name="confirm"
									type="password"
									value={form.confirm}
									onChange={handleChange}
									placeholder="Confirm Password"
									className="w-full bg-gray-200 placeholder-gray-600 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-300"
								/>
							</div>

							<div className="flex items-center justify-between mt-2">
								<button
									type="submit"
									className="bg-[#0570c4] text-white px-6 py-2 rounded-full text-sm shadow hover:bg-[#05599f] transition-colors"
								>
									Submit
								</button>

								<div className=" text-gray-500 text-right">
									<div className='text-sm font-semibold'>*Add three verification documents.</div>
									<div className="text-xs italic mt-1">Society clarification letter/Organization Letter/Society President Letter.</div>
								</div>
							</div>

							<div className="mt-6 text-center">
												<a
													href="/login"
													className="inline-block bg-[#0570c4] text-white px-10 py-3 rounded-full hover:bg-[#05599f] transition-colors"
												>
													Login
												</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

