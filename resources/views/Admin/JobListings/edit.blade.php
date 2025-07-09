@extends('Layout.AdminLayout')
@section('title', 'Job Listings')

@section('content')

    <div class="max-w-7xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow">
        <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Edit: {{ $job->title }}</h2>

        <form action="{{ route('admin.jobs.update', $job->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <!-- Job Title -->
            <div class="mb-4">
                <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job
                    Title</label>
                <input type="text" name="title" id="title" value="{{ old('title', $job->title) }}" required
                    class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100">
                @error('title')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Department -->
            <div class="mb-4">
                <label for="department"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
                <input type="text" name="department" id="department" value="{{ old('department', $job->department) }}"
                    required
                    class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100">
                @error('department')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Location -->
            <div class="mb-4">
                <label for="location"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
                <input type="text" name="location" id="location" value="{{ old('location', $job->location) }}" required
                    class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100">
                @error('location')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Job Type -->
            <div class="mb-4">
                <label for="type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job Type
                    (e.g., Full-time, Part-time)</label>
                <input type="text" name="type" id="type" value="{{ old('type', $job->type) }}" required
                    class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100">
                @error('type')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Salary -->
            <div class="mb-4">
                <label for="type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Salary
                </label>
                <input type="text" name="salary" id="salary" value="{{ old('salary') }}"
                    class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100">
                @error('type')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Posted Date -->
            <div class="mb-4">
                <label for="postedDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Posted
                    Date</label>
                <input type="date" name="postedDate" id="postedDate" value="{{ old('postedDate', $job->postedDate) }}"
                    required
                    class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100">
                @error('postedDate')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Description -->
            <div class="mb-6">
                <label for="description"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <textarea name="description" id="description" rows="5" required
                    class="summernote mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100">{!! old('description', $job->description) !!}</textarea>
                @error('description')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Image Upload -->
            <div class="mb-6">
                <label for="image" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job Image
                    (Optional)</label>
                <input type="file" name="image" id="image" class="mt-1 block w-full text-sm text-gray-500 dark:text-gray-300
                                  file:mr-4 file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-indigo-50 dark:file:bg-indigo-800 file:text-indigo-700 dark:file:text-indigo-300
                                  hover:file:bg-indigo-100 dark:hover:file:bg-indigo-700">
                @error('image')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror

                @if ($job->image)
                    <div class="mt-4">
                        <p class="text-sm text-gray-500 dark:text-gray-400">Current Image:</p>
                        <img src="{{  asset('job_images/' . $job->image) }}" alt="{{ $job->title }}"
                            class="mt-2 h-20 w-auto rounded">
                    </div>
                @endif
            </div>


            <!-- Submit Button -->
            <div class="flex items-center justify-end space-x-3">
                <a href="{{ route('admin.jobs.index') }}"
                    class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                </a>
                <button type="submit"
                    class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo">
                    Update Job
                </button>
            </div>
        </form>
    </div>

@endsection

<!-- Summernote CSS -->
@section('styles')
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <style>
        .note-toolbar {
            background-color: #374151;
            /* Tailwind gray-700 */
        }

        .note-editable {
            background-color: #1f2937 !important;
            /* Tailwind gray-800 */
            color: white !important;
        }

        /* --- ADD THIS --- */
        /* Restore list styles inside the editor */
        .note-editable ul {
            list-style: disc !important;
            padding-left: 20px !important;
            margin-left: 20px !important;
        }

        .note-editable ol {
            list-style: decimal !important;
            padding-left: 20px !important;
            margin-left: 20px !important;
        }

        /* --- END ADD --- */
    </style>
@endsection

<!-- Summernote JS -->
@section('scripts')
    {{-- Use a stable jQuery version compatible with Summernote v0.8.18 --}}
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

    <script>
        $(document).ready(function () {
            $('#description').summernote({
                placeholder: 'Enter description...',
                tabsize: 2,
                height: 500,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
                    ['fontname', ['fontname']],
                    ['fontsize', ['fontsize']],
                    ['color', ['color']],
                    // This line enables the paragraph, ul, and ol buttons
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['height', ['height']],
                    ['insert', ['link', 'picture', 'video', 'hr']],
                    ['view', ['fullscreen', 'codeview', 'help']]
                ]
            });
        });
    </script>
@endsection