@extends('Layout.AdminLayout')
@section('title', 'Edit Portfolio')

@section('content')

    <form action="{{ route('portfolio.update', $portfolio->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="space-y-6">
            <!-- Title -->
            <div>
                <label for="title" class="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input type="text" id="title" name="title"
                    class="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value="{{ old('title', $portfolio->title) }}" required>
            </div>

            <!-- Content -->
            <div>
                <label for="content" class="block text-sm font-medium text-slate-700 mb-1">Content</label>
                <textarea id="content" name="content"
                    class="summernote w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm" rows="6"
                    required>{{ old('content', $portfolio->content) }}</textarea>
            </div>

            <!-- Cover Image -->
            <div>
                <label for="cover_image" class="block text-sm font-medium text-slate-700 mb-1">Cover Image <span class="text-xs text-zinc-400">(1200 x 800 minimum)</span></label>
                @if($portfolio->cover_image)
                    <div class="my-2">
                        <img src="{{ asset('storage/' . $portfolio->cover_image) }}" alt="Cover Image"
                            class="w-32 h-auto rounded-md mb-2">
                        <label class="inline-flex items-center">
                            <input type="checkbox" name="remove_cover_image" class="mr-2">
                            <span class="text-sm text-red-600">Remove current image</span>
                        </label>
                    </div>
                @endif
                <input type="file" id="cover_image" name="cover_image"
                    class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                <p class="text-xs text-slate-500 mt-1">Leave blank to keep the current image.</p>
            </div>

            <!-- Thumbnail -->
            <div class="mt-4">
                <label for="thumbnail" class="block text-sm font-medium text-slate-700 mb-1">Thumbnail</label>
                @if($portfolio->thumbnail)
                    <div class="my-2">
                        <img src="{{ asset('storage/' . $portfolio->thumbnail) }}" alt="Thumbnail"
                            class="w-32 h-auto rounded-md mb-2">
                        <label class="inline-flex items-center">
                            <input type="checkbox" name="remove_thumbnail" class="mr-2">
                            <span class="text-sm text-red-600">Remove current image</span>
                        </label>
                    </div>
                @endif
                <input type="file" id="thumbnail" name="thumbnail"
                    class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                <p class="text-xs text-slate-500 mt-1">Leave blank to keep the current image.</p>
            </div>


            <!-- Status -->
            <div>
                <label for="status" class="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select id="status" name="status"
                    class="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="draft" {{ old('status', $portfolio->status) == 'draft' ? 'selected' : '' }}>Draft</option>
                    <option value="published" {{ old('status', $portfolio->status) == 'published' ? 'selected' : '' }}>
                        Published</option>
                </select>
            </div>

            <!-- Published At -->
            <div>
                <label for="published_at" class="block text-sm font-medium text-slate-700 mb-1">Published At</label>
                <input type="datetime-local" id="published_at" name="published_at"
                    class="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value="{{ old('published_at', $portfolio->published_at ? \Carbon\Carbon::parse($portfolio->published_at)->format('Y-m-d\TH:i') : '') }}">
            </div>
        </div>

        <!-- Form Actions -->
        <div class="mt-8 flex justify-end space-x-4">
            <a href="{{ route('portfolio.index') }}"
                class="px-6 py-2 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 font-medium transition">Cancel</a>
            <button type="submit"
                class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium transition">Update</button>
        </div>
    </form>

@endsection

<!-- Summernote CSS -->
@section('styles')
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <style>
        .note-toolbar {
            background-color: white !important;
        }

        .note-editable {
            background-color: white !important;
            color: black !important;
        }

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
    </style>
@endsection

<!-- Summernote JS -->
@section('scripts')
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

    <script>
        $(document).ready(function () {
            $('#content').summernote({
                placeholder: 'Enter content...',
                tabsize: 2,
                height: 500,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
                    ['fontname', ['fontname']],
                    ['fontsize', ['fontsize']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['height', ['height']],
                    ['insert', ['link', 'picture', 'video', 'hr']],
                    ['view', ['fullscreen', 'codeview', 'help']]
                ]
            });
        });
    </script>
@endsection