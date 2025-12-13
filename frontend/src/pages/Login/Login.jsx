import React, { useState } from 'react'
import UserService from '../../services/UserService'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [form, setForm] = useState({
        index: '',
        password: '',
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function handleChange(e) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setError('')
    }

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError('')

        const loginData = {
            index: form.index,
            password: form.password
        }

        UserService.loginUser(loginData)
            .then((data) => {
                console.log('Login successful:', data)
                if (data.token) {
                    navigate('/') 
                } else {
                    setError(data.message || 'Login failed')
                }
            })
            .catch((error) => {
                console.error('Login failed:', error)
                setError(error.response?.data?.message || 'Invalid credentials')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-6xl bg-white rounded-lg overflow-hidden flex h-[600px]" style={{boxShadow:"0 0 20px #ccc"}}>
                {/* Right form panel */}
                <div className="w-full md:w-1/2 p-10 lg:p-16 bg-white">
                    <div className="max-w-md mx-auto">
                        <h4 className="text-3xl font-semibold text-[#0570c4] text-center mb-2 mt-8">Sign in</h4>
                        <p className="text-xs text-center mb-6">
                            If you already have an account, Please <span className="font-bold">Sign in!</span>
                        </p>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only">Index Number</label>
                                <input
                                    name="index"
                                    value={form.index}
                                    onChange={handleChange}
                                    placeholder="Enter Index Number"
                                    required
                                    className="w-full bg-gray-200 placeholder-gray-600 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-[#0570c4]"
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
                                    required
                                    minLength="6"
                                    className="w-full bg-gray-200 placeholder-gray-600 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-[#0570c4] mt-4"
                                />
                            </div>

                            <div className="flex items-center justify-center mt-2">
                                <div className="text-gray-500 text-center">
                                    <div className='text-sm'>Forget your password? <span className='font-bold cursor-pointer hover:text-[#0570c4]'>Click here</span></div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-block bg-[#0570c4] text-white px-10 py-3 rounded-full hover:bg-[#05599f] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Left teal panel */}
                <div className="hidden md:flex md:w-1/2 bg-[#0570c4] from-teal-400 to-teal-500 text-white p-12 items-center justify-center">
                    <div className="max-w-md text-center">
                        <h2 className="text-4xl font-extrabold mb-4">Welcome Back!</h2>
                        <p className="mb-6 text-sm opacity-90">
                            To keep connected with us and manage society events, Please login with your details.
                        </p>
                        <p className="mb-8 text-xs opacity-80">If you haven't an account, Please register your society!</p>

                        <a
                            href="/register"
                            className="inline-block px-10 py-3 rounded-full border-2 border-white hover:bg-white hover:text-teal-600 transition-colors text-sm"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
