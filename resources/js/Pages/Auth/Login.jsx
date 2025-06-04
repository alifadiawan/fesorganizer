import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import LoginLogout from '@/Layouts/LoginLogout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>

            <div className="min-h-screen bg-[#2e1a80] text-white">
                <main className="container mx-auto px-4 py-36 flex flex-col md:flex-row items-center justify-center">

                    <div className="w-full md:w-5/12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

                        <form onSubmit={submit}>
                            <div className="mb-6">
                                <InputLabel htmlFor="email" value="Email" className="text-white font-medium" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-150"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="you@example.com"
                                />

                                <InputError message={errors.email} className="mt-2 text-red-600" />
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between items-center">
                                    <InputLabel htmlFor="password" value="Password" className="text-white font-medium" />

                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="text-sm text-purple-300 hover:text-white transition duration-150"
                                        >
                                            Forgot password?
                                        </Link>
                                    )}
                                </div>

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-150"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                />

                                <InputError message={errors.password} className="mt-2 text-red-600" />
                            </div>

                            <div className="mb-6">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    <span className="ms-2 text-sm text-white">
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            <div>
                                <PrimaryButton
                                    className="w-full py-3 flex justify-center bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 text-white transition duration-150 rounded-md"
                                    disabled={processing}
                                >
                                    {processing ? 'Logging in...' : 'Log in'}
                                </PrimaryButton>
                            </div>

                            <div className="mt-6 text-center">
                                <span className="text-sm text-white">Don't have an account? </span>
                                <Link href={route('register')} className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                                    Sign up
                                </Link>
                            </div>
                        </form>

                    </div>
                </main>
            </div>

            {/* <Head title="Log in" /> 

            {status && (
                <div className="mb-4 p-3 rounded-lg bg-green-50 text-sm font-medium text-green-700 border border-green-200">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mb-6">
                    <InputLabel htmlFor="email" value="Email" className="text-white font-medium" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-150"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="you@example.com"
                    />

                    <InputError message={errors.email} className="mt-2 text-red-600" />
                </div>

                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <InputLabel htmlFor="password" value="Password" className="text-white font-medium" />

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-indigo-600 hover:text-indigo-800 transition duration-150"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-150"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="••••••••"
                    />

                    <InputError message={errors.password} className="mt-2 text-red-600" />
                </div>

                <div className="mb-6">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div>
                    <PrimaryButton
                        className="w-full py-3 flex justify-center bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 text-white transition duration-150 rounded-md"
                        disabled={processing}
                    >
                        {processing ? 'Logging in...' : 'Log in'}
                    </PrimaryButton>
                </div>

                <div className="mt-6 text-center">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <Link href={route('register')} className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                        Sign up
                    </Link>
                </div>
            </form> */}

        </GuestLayout>
    );
}
