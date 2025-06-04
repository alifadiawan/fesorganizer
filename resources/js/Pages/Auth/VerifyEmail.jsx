import PrimaryButton from '@/Components/PrimaryButton';
import LoginLogout from '@/Layouts/LoginLogout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});
    const [cooldown, setCooldown] = useState(20);

    const submit = (e) => {
        e.preventDefault();
        if (cooldown <= 0 && !processing) {
            post(route('verification.send'));
            setCooldown(20);
        }
    };

    // timer 20 seconds
    useEffect(() => {
        if (cooldown > 0) {
            const Timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
            return () => clearTimeout(Timer);
        }
    }, [cooldown]);

    return (
        <LoginLogout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing || cooldown > 0}>
                        {cooldown > 0
                            ? `Please wait ${cooldown}s`
                            : 'Resend Verification Email'}
                    </PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </LoginLogout>
    );
}
