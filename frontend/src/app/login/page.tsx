'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleLogin =  (e: React.FormEvent) => {
        e.preventDefault();
        // alert('Proceed to login...');

        router.push('/admin');
    }

    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full mb-4 px-4 py-2 border rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-600"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full mb-4 px-4 py-2 border rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-600"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
    
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        disabled={loading}
                        >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;
