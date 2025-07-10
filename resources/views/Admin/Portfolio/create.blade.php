@extends('Layout.AdminLayout')
@section('title', 'Portfolio')

@section('content')


    <form action="{{ route('portfolio.store') }}" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="space-y-6">
            <!-- Title -->
            <div>
                <label for="title" class="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input type="text" id="title" name="title"
                    class="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required>
            </div>

            <!-- Content -->
            <div>
                <label for="content" class="block text-sm font-medium text-slate-700 mb-1">Content</label>
                <textarea id="content" name="content"
                    class="summernote w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm" rows="6"
                    required></textarea>
            </div>

            <!-- Cover Image -->
            <div>
                <label for="cover_image" class="block text-sm font-medium text-slate-700 mb-1">Cover Image</label>
                <input type="file" id="cover_image" name="cover_image"
                    class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>

            <!-- Thumbnail -->
            <div>
                <label for="thumbnail" class="block text-sm font-medium text-slate-700 mb-1">Thumbnail</label>
                <input type="file" id="thumbnail" name="thumbnail"
                    class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>

            <!-- Status -->
            <div>
                <label for="status" class="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select id="status" name="status"
                    class="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                </select>
            </div>

            <!-- Published At -->
            <div>
                <label for="published_at" class="block text-sm font-medium text-slate-700 mb-1">Published At</label>
                <input type="datetime-local" id="published_at" name="published_at"
                    class="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            </div>
        </div>

        <!-- Form Actions -->
        <div class="mt-8 flex justify-end space-x-4">
            <a href="{{ route('portfolio.index') }}"
                class="px-6 py-2 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 font-medium transition">Cancel</a>
            <button type="submit"
                class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium transition">Save</button>
        </div>
    </form>

@endsection

<!-- Summernote CSS -->
@section('styles')
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <style>
        .note-toolbar {
            background-color: white !important;
            /* Tailwind gray-700 */
        }

        .note-editable {
            background-color: #white !important;
            /* Tailwind gray-800 */
            color: black !important;
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
            $('#content').summernote({
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