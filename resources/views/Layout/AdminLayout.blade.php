<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'FES MANAGEMENT - ADMIN') }} - @yield('title', 'Dashboard')</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Styles -->
    @vite(['resources/css/app.css'])
    {{-- If you are using Vite, uncomment the line above and comment out the CDN script.
         Ensure your tailwind.config.js is set up correctly in your project. --}}

    <style>
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        [x-cloak] { display: none !important; }
    </style>
    @yield('styles')
</head>
<body class="font-sans antialiased bg-gray-100 dark:bg-gray-900">
    <div class="flex h-screen overflow-hidden" x-data="{ sidebarOpen: false }">
        <!-- Sidebar -->
        @include('Layout.Sidebar') {{-- Assuming sidebar is in layouts/partials/sidebar.blade.php --}}

        <!-- Content area -->
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <!-- Site header -->
            <header class="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-30">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16 -mb-px">
                        <!-- Header: Left side -->
                        <div class="flex">
                            <!-- Hamburger button -->
                            <button
                                class="text-gray-500 hover:text-gray-600 lg:hidden"
                                @click.stop="sidebarOpen = !sidebarOpen"
                                aria-controls="sidebar"
                                :aria-expanded="sidebarOpen"
                            >
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="5" width="16" height="2" />
                                    <rect x="4" y="11" width="16" height="2" />
                                    <rect x="4" y="17" width="16" height="2" />
                                </svg>
                            </button>
                        </div>

                        <!-- Header: Right side -->
                        <div class="flex items-center space-x-3">
                            {{-- User menu or other header items can go here --}}
                            <span class="text-gray-700 dark:text-gray-200">Admin User</span>
                            {{-- Example: Logout form --}}
                            {{-- <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <a href="{{ route('logout') }}"
                                   onclick="event.preventDefault(); this.closest('form').submit();"
                                   class="text-sm text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-200">
                                    Log Out
                                </a>
                            </form> --}}
                        </div>
                    </div>
                </div>
            </header>

            <main class="flex-1">
                <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <!-- Page heading -->
                    <div class="mb-8">
                        <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">@yield('title', 'Dashboard')</h1>
                    </div>

                    <!-- Flash Messages -->
                    @if (session('success'))
                        <div class="mb-4 px-4 py-3 leading-normal text-green-700 bg-green-100 border border-green-400 rounded-lg" role="alert">
                            <p>{{ session('success') }}</p>
                        </div>
                    @endif
                    @if (session('error'))
                        <div class="mb-4 px-4 py-3 leading-normal text-red-700 bg-red-100 border border-red-400 rounded-lg" role="alert">
                            <p>{{ session('error') }}</p>
                        </div>
                    @endif
                    @if ($errors->any())
                        <div class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                            <strong class="font-bold">Whoops! Something went wrong.</strong>
                            <ul class="mt-2 list-disc list-inside text-sm">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <!-- Content -->
                    @yield('content')
                </div>
            </main>
        </div>
    </div>

    <!-- Alpine.js for simple interactivity like sidebar toggle -->
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
    @yield('scripts')
</body>
</html>
