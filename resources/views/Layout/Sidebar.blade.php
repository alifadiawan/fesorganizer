<!-- Sidebar -->
<div id="sidebar"
    class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-50 border-r border-slate-200 p-4 transition-all duration-200 ease-in-out"
    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'" @click.outside="sidebarOpen = false"
    @keydown.escape.window="sidebarOpen = false"
    x-data="{ sidebarExpanded: localStorage.getItem('sidebar-expanded') === 'true' }"
    x-init="$watch('sidebarExpanded', value => localStorage.setItem('sidebar-expanded', value))">

    <!-- Sidebar header -->
    <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button class="lg:hidden text-slate-500 hover:text-slate-400" @click.stop="sidebarOpen = !sidebarOpen"
            aria-controls="sidebar" :aria-expanded="sidebarOpen">
            <span class="sr-only">Close sidebar</span>
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
        </button>
        <!-- Logo -->
        <a class="block" href="{{ route('admin.dashboard') }}">
            <svg width="32" height="32" viewBox="0 0 32 32">
                <defs>
                    <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a-new">
                        <stop stop-color="#6366F1" stop-opacity="0" offset="0%" />
                        <stop stop-color="#6366F1" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b-new">
                        <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                        <stop stop-color="#38BDF8" offset="100%" />
                    </linearGradient>
                </defs>
                <rect fill="#FFFFFF" width="32" height="32" rx="16" />
                <path
                    d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                    fill="url(#logo-a-new)" />
                <path
                    d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                    fill="url(#logo-b-new)" />
            </svg>
        </a>
    </div>

    <!-- Links -->
    <div class="space-y-8">
        <!-- Pages group -->
        <div>
            <h3 class="text-xs uppercase text-slate-400 font-semibold pl-3">
                <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                    aria-hidden="true">•••</span>
                <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Menu</span>
            </h3>
            <ul class="mt-3">
                <!-- Dashboard -->
                <li
                    class="px-3 py-2 rounded-md mb-0.5 last:mb-0 @if (request()->routeIs('dashboard')) bg-slate-200 @endif">
                    <a class="block text-slate-600 hover:text-slate-800 font-medium truncate transition duration-150 @if (request()->routeIs('dashboard')) text-slate-800 @endif"
                        href="{{ route('admin.dashboard') }}">
                        <div class="flex items-center">
                            <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                <path
                                    class="fill-current @if (request()->routeIs('dashboard')) text-indigo-500 @else text-slate-400 @endif"
                                    d="M12 0L0 12l12 12 12-12L12 0z" />
                                <path
                                    class="fill-current @if (request()->routeIs('dashboard')) text-indigo-300 @else text-slate-600 @endif"
                                    d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9S16.963 3 12 3z" />
                                <path class="fill-current text-indigo-500"
                                    d="M12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 15 12 15z" />
                            </svg>
                            <span
                                class="text-sm ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                        </div>
                    </a>
                </li>

                <!-- Job Listings -->
                <li class="px-3 py-2 rounded-md mb-0.5 last:mb-0 @if (request()->routeIs('jobs.*') || request()->routeIs('admin.jobs.*')) bg-slate-200 @endif"
                    x-data="{ open: {{ request()->routeIs('jobs.*') || request()->routeIs('admin.jobs.*') ? 'true' : 'false' }} }">
                    <a class="block text-slate-600 hover:text-slate-800 font-medium truncate transition duration-150 @if (request()->routeIs('jobs.*') || request()->routeIs('admin.jobs.*')) text-slate-800 @endif"
                        href="#0" @click.prevent="sidebarExpanded ? open = !open : sidebarExpanded = true">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                    <path
                                        class="fill-current @if (request()->routeIs('jobs.*') || request()->routeIs('admin.jobs.*')) text-indigo-500 @else text-slate-400 @endif"
                                        d="M16 13v4H8v-4H0l8-8 8 8h-8Z"></path>
                                    <path
                                        class="fill-current @if (request()->routeIs('jobs.*') || request()->routeIs('admin.jobs.*')) text-indigo-300 @else text-slate-600 @endif"
                                        d="m16 13-4-4-4 4M8 0v9h8V0H8Z"></path>
                                </svg>
                                <span
                                    class="text-sm ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Job
                                    Listings</span>
                            </div>
                            <!-- Icon -->
                            <div
                                class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 @if (request()->routeIs('jobs.*') || request()->routeIs('admin.jobs.*')) rotate-180 @endif"
                                    :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                </svg>
                            </div>
                        </div>
                    </a>
                    <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul class="pl-9 mt-1 @if (!(request()->routeIs('jobs.*') || request()->routeIs('admin.jobs.*'))) hidden @endif"
                            :class="open ? '!block' : 'hidden'">
                            <li class="mb-1 last:mb-0">
                                <a class="block text-slate-500 hover:text-slate-800 transition duration-150 truncate @if (request()->routeIs('jobs.index') || request()->routeIs('admin.jobs.index')) !text-slate-800 font-medium @endif"
                                    href="{{ route('admin.jobs.index') }}">
                                    <span
                                        class="text-sm lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">All
                                        Jobs</span>
                                </a>
                            </li>
                            <li class="mb-1 last:mb-0">
                                <a class="block text-slate-500 hover:text-slate-800 transition duration-150 truncate @if (request()->routeIs('jobs.create') || request()->routeIs('admin.jobs.create')) !text-slate-800 font-medium @endif"
                                    href="{{ route('admin.jobs.create') }}">
                                    <span
                                        class="text-sm lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Add
                                        New Job</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Portfolio -->
                <li class="px-3 py-2 rounded-md mb-0.5 last:mb-0">
                    <a href="{{ route('portfolio.index') }}"
                        class="block text-slate-600 hover:text-slate-800 font-medium truncate transition duration-150">
                        <div class="flex items-center">
                            <svg class="shrink-0 h-6 w-6 text-slate-400" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 7a2 2 0 012-2h5l2 2h7a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                            </svg>
                            <span
                                class="text-sm ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Portfolio
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        
        <!-- Other group -->
        <div>
            <h3 class="text-xs uppercase text-slate-400 font-semibold pl-3">
                <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                    aria-hidden="true">•••</span>
                <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Other</span>
            </h3>
            <ul class="mt-3">
                <!-- Logout -->
                <li class="px-3 py-2 rounded-md mb-0.5 last:mb-0">
                    <form method="POST" action="{{ route('logout') }}" x-ref="logoutForm">
                        @csrf
                        <a href="{{ route('logout') }}" @click.prevent="$refs.logoutForm.submit();"
                            class="block text-slate-600 hover:text-slate-800 font-medium truncate transition duration-150">
                            <div class="flex items-center">
                                <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                    <path class="fill-current text-slate-400"
                                        d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h9z">
                                    </path>
                                </svg>
                                <span
                                    class="text-sm ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Logout</span>
                            </div>
                        </a>
                    </form>
                </li>
            </ul>
        </div>
    </div>

    <!-- Expand / collapse button -->
    <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
            <button @click="sidebarExpanded = !sidebarExpanded">
                <span class="sr-only">Expand / collapse sidebar</span>
                <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                    <path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                    <path class="text-slate-300" d="M3 23H1V1h2z" />
                </svg>
            </button>
        </div>
    </div>

</div>
