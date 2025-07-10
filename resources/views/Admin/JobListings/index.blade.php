@extends('Layout.AdminLayout')
@section('title', 'Job Listings')

@section('content')
    <div class="flex justify-between items-center mb-6">
        <a href="{{ route('admin.jobs.create') }}"
            class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium transition">
            Add New Job
        </a>
    </div>

    <div class="w-full overflow-hidden rounded-xl shadow bg-white">
        <div class="w-full overflow-x-auto">
            <table class="w-full whitespace-no-wrap">
                <thead>
                    <tr
                        class="text-xs font-semibold tracking-wide text-left text-slate-500 uppercase border-b border-slate-200 bg-slate-100">
                        <th class="px-6 py-3">Title</th>
                        <th class="px-6 py-3">Department</th>
                        <th class="px-6 py-3">Location</th>
                        <th class="px-6 py-3">Type</th>
                        <th class="px-6 py-3">Posted Date</th>
                        <th class="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-slate-200">
                    @forelse ($jobs as $job)
                        <tr class="text-slate-700">
                            <td class="px-6 py-4">
                                <div class="flex items-center text-sm">
                                    @if ($job->image)
                                        <div class="relative hidden w-10 h-10 mr-3 rounded-full md:block">
                                            <img class="object-cover w-full h-full rounded-full"
                                                src="{{ asset('job_images/' . $job->image) }}"
                                                alt="{{ $job->title }}" loading="lazy" />
                                            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                            </div>
                                        </div>
                                    @else
                                        <div
                                            class="relative hidden w-10 h-10 mr-3 rounded-full md:block bg-slate-200 flex items-center justify-center text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    @endif
                                    <div>
                                        <p class="font-semibold text-slate-800">{{ $job->title }}</p>
                                        <p class="text-xs text-slate-500">
                                            {{ Str::limit($job->description, 30) }}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 text-sm">{{ $job->department }}</td>
                            <td class="px-6 py-4 text-sm">{{ $job->location }}</td>
                            <td class="px-6 py-4 text-xs">
                                <span
                                    class="px-2 py-1 font-semibold leading-tight text-indigo-700 bg-indigo-100 rounded-full">
                                    {{ $job->type }}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm">{{ \Carbon\Carbon::parse($job->postedDate)->format('M d, Y') }}
                            </td>
                            <td class="px-6 py-4 text-sm">
                                <div class="flex items-center space-x-4">
                                    <a href="{{ route('admin.jobs.edit', $job->id) }}"
                                        class="text-slate-500 hover:text-yellow-600"
                                        title="Edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                            <path fill-rule="evenodd"
                                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <form action="{{ route('admin.jobs.destroy', $job->id) }}" method="POST"
                                        onsubmit="return confirm('Are you sure you want to delete this job listing?');"
                                        class="inline-block">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                            class="text-slate-500 hover:text-red-600"
                                            title="Delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="6" class="px-6 py-10 text-center text-slate-500">
                                No job listings found.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div
            class="px-6 py-4 border-t border-slate-200 bg-slate-50">
            {{ $jobs->links() }}
        </div>
    </div>
@endsection
