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

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Styles -->
    <style>
        /* Custom aesthetic scrollbar for light theme */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #f8fafc; /* slate-50 */
        }

        ::-webkit-scrollbar-thumb {
            background: #e2e8f0; /* slate-200 */
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #cbd5e1; /* slate-300 */
        }

        [x-cloak] {
            display: none !important;
        }
    </style>
    @yield('styles')
</head>

<body class="font-sans antialiased bg-slate-100">
    <div class="flex h-screen overflow-hidden" x-data="{ sidebarOpen: false }">

        <!-- Sidebar -->
        @include('Layout.Sidebar')

        <!-- Content area -->
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

            <!-- Header -->
            <header class="sticky top-0 bg-slate-50/80 backdrop-blur-sm border-b border-slate-200 z-30">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16 -mb-px">
                        
                        <!-- Hamburger button for mobile -->
                        <div class="flex">
                            <button class="text-slate-500 hover:text-slate-600 lg:hidden" @click.stop="sidebarOpen = !sidebarOpen"
                                aria-controls="sidebar" :aria-expanded="sidebarOpen">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="5" width="16" height="2" rx="1" />
                                    <rect x="4" y="11" width="16" height="2" rx="1" />
                                    <rect x="4" y="17" width="16" height="2" rx="1" />
                                </svg>
                            </button>
                        </div>

                        <!-- User info -->
                        <div class="flex items-center space-x-3">
                            <span class="text-sm font-medium text-slate-700">Admin User</span>
                             {{-- You can add a user avatar or dropdown menu here --}}
                        </div>
                    </div>
                </div>
            </header>

            <main class="flex-1">
                <div class="px-4 sm:px-6 py-8 w-full mx-auto">
                    <!-- Page Title -->
                    <div class="mb-8 px-8">
                        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">@yield('title', 'Dashboard')</h1>
                    </div>

                    <!-- Alerts and Notifications -->
                    @if (session('success'))
                        <div class="flex items-center p-4 mb-6 text-sm text-green-800 rounded-lg bg-green-100"
                             role="alert" x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 5000)" x-transition>
                            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span class="sr-only">Info</span>
                            <div><span class="font-medium">Success!</span> {{ session('success') }}</div>
                        </div>
                    @endif

                     @if (session('error'))
                        <div class="flex items-center p-4 mb-6 text-sm text-red-800 rounded-lg bg-red-100"
                             role="alert" x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 5000)" x-transition>
                             <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span class="sr-only">Info</span>
                            <div><span class="font-medium">Error!</span> {{ session('error') }}</div>
                        </div>
                    @endif
                    
                    @if ($errors->any())
                        <div class="p-4 mb-6 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                            <span class="font-bold">Whoops! Something went wrong.</span>
                            <ul class="mt-2 list-disc list-inside space-y-1">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <!-- Main Content from child pages -->
                    <div class="px-8">
                        @yield('content')
                    </div>
                </div>
            </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
    @yield('scripts')
</body>

</html>
