@extends('Layout.AdminLayout')
@section('title', 'Dashboard')

@section('content')

    {{-- Welcome Message or Quick Stats (Optional) --}}
    <div class="mb-8 p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
        <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200">Welcome, Admin!</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-1">Here's a quick overview of your application.</p>
        {{-- You can add some quick stats or links here later --}}
    </div>

    {{-- Main Dashboard Content Area --}}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {{-- Example Card 1 (Empty State) --}}
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Recent Activity</h3>
            <div class="text-center py-8">
                <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">No recent activity</h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by managing your content.</p>
            </div>
        </div>

        {{-- Example Card 2 (Empty State) --}}
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Metrics</h3>
            <div class="text-center py-8">
                <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 12M3.75 3v9h9M3.75 3a9 9 0 0 1 18 0v9M3.75 21h16.5M12 6.75h.008v.008H12V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 3.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 3.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 3.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">No metrics to display</h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Data will appear here once available.</p>
            </div>
        </div>

        {{-- Example Card 3 (Placeholder for future content) --}}
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Quick Links</h3>
            <ul class="space-y-2 mt-4">
                <li>
                    <a href="{{ route('admin.jobs.index') }}"
                        class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline">Manage
                        Job Listings</a>
                </li>
                <li>
                    <a href="#"
                        class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline">User
                        Management (Coming Soon)</a>
                </li>
                <li>
                    <a href="#"
                        class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline">Settings
                        (Coming Soon)</a>
                </li>
            </ul>
        </div>
    </div>

@endsection
