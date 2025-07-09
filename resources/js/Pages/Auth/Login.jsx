import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@inertiajs/react';

// --- Placeholder Components (for standalone functionality) ---

const GuestLayout = ({ children }) => (
    <div className="min-h-screen bg-[#1a0033]">{children}</div>
);

const InputLabel = ({ htmlFor, value, className }) => (
    <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`}>
        {value}
    </label>
);

const TextInput = ({ id, type = 'text', name, value, className, autoComplete, isFocused, onChange, placeholder }) => {
    const inputRef = React.useRef(null);

    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <input
            id={id}
            type={type}
            name={name}
            value={value}
            className={`mt-1 block w-full rounded-md bg-white/10 border-purple-500/30 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-400 focus:ring-opacity-50 transition duration-150 ${className}`}
            autoComplete={autoComplete}
            ref={inputRef}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

const InputError = ({ message, className }) => {
    if (!message) return null;
    return <p className={`text-sm text-red-400 ${className}`}>{message}</p>;
};

const Checkbox = ({ name, checked, onChange, className }) => (
    <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={`rounded border-gray-500 text-purple-600 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-400 focus:ring-opacity-50 ${className}`}
    />
);

const PrimaryButton = ({ className, disabled, children }) => (
    <button
        type="submit"
        className={`w-full py-3 flex justify-center bg-gradient-to-r from-red-700 to-purple-600 hover:from-red-600 hover:to-purple-500 text-white font-bold transition duration-150 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        disabled={disabled}
    >
        {children}
    </button>
);

const Link = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

// --- Main Login Component ---

export default function Login({ status, canResetPassword = true }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        // In a real Inertia app, this would be route('login')
        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <div className="min-h-screen bg-gradient-to-br from-[#1a0033] to-black text-white flex items-center justify-center p-4">
                <motion.main 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="container mx-auto w-full max-w-md"
                >
                    <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
                        <div className="text-center mb-8">
                            <a href="/" className="inline-block max-w-48 mx-auto">
                                <img
                                    src="logofest1.png"
                                    alt="FestKarir Logo"
                                    className="w-full h-full object-cover"
                                />
                            </a>
                            <h2 className="text-3xl font-bold mt-6 text-white">Welcome Back</h2>
                             <p className="text-gray-400">Log in to continue your journey.</p>
                        </div>

                        <form onSubmit={submit}>
                            <div className="mb-6">
                                <InputLabel htmlFor="email" value="Email" className="text-gray-300 font-medium mb-1" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    placeholder="you@example.com"
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                {/* <div className="flex justify-between items-center mb-1">
                                    <InputLabel htmlFor="password" value="Password" className="text-gray-300 font-medium" />
                                    {canResetPassword && (
                                        <Link
                                            href="#" // Replaced route('password.request')
                                            className="text-sm text-purple-400 hover:text-purple-300 transition duration-150"
                                        >
                                            Forgot password?
                                        </Link>
                                    )}
                                </div> */}
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    placeholder="••••••••"
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="mb-6">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData({ ...data, remember: e.target.checked })}
                                    />
                                    <span className="ms-2 text-sm text-gray-300">
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            <div>
                                <PrimaryButton disabled={processing}>
                                    {processing ? 'Logging in...' : 'Log in'}
                                </PrimaryButton>
                            </div>

                            {/* <div className="mt-6 text-center">
                                <span className="text-sm text-gray-400">Don't have an account? </span>
                                <Link href="#" className="text-sm text-purple-400 hover:text-purple-300 font-medium transition duration-150">
                                    Sign up
                                </Link>
                            </div> */}
                        </form>
                    </div>
                </motion.main>
            </div>
        </GuestLayout>
    );
}
