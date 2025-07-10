<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::latest()->paginate(15);
        return view('Admin.Portfolio.index', compact('portfolios'));
    }

    // Menampilkan form create
    public function create()
    {
        return view('Admin.Portfolio.create');
    }

    // Menyimpan data baru
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:5000', // 5MB
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:5000', // 5MB
        ]);

        $coverImagePath = null;
        $thumbnailPath = null;

        if ($request->hasFile('cover_image')) {
            $coverImageFile = $request->file('cover_image');
            $coverImageName = $coverImageFile->getClientOriginalName(); // ex: 1752049898.png
            $coverImagePath = $coverImageFile->storeAs('portfolio/cover', $coverImageName, 'public');
        }

        if ($request->hasFile('thumbnail')) {
            $thumbnailFile = $request->file('thumbnail');
            $thumbnailName = $thumbnailFile->getClientOriginalName(); // ex: 1752049898.png
            $thumbnailPath = $thumbnailFile->storeAs('portfolio/thumbnail', $thumbnailName, 'public');
        }

        Portfolio::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'excerpt' => Str::limit(strip_tags($request->content), 100),
            'content' => $request->content,
            'cover_image' => $coverImagePath,
            'thumbnail' => $thumbnailPath,
            'status' => $request->status ?? 'draft',
            'published_at' => $request->published_at,
        ]);

        return redirect()->route('portfolio.index')->with('success', 'Portfolio created.');
    }

    // Menampilkan detail portfolio
    public function show($id)
    {
        $portfolio = Portfolio::findOrFail($id);
        return view('portfolio.show', compact('portfolio'));
    }

    // Menampilkan form edit
    public function edit($id)
    {
        $portfolio = Portfolio::findOrFail($id);
        return view('Admin.Portfolio.edit', compact('portfolio'));
    }

    // Mengupdate data
    public function update(Request $request, $id)
    {
        $portfolio = Portfolio::findOrFail($id);

        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // Remove existing cover image
        if ($request->has('remove_cover_image') && $portfolio->cover_image) {
            Storage::disk('public')->delete($portfolio->cover_image);
            $portfolio->cover_image = null;
        }

        // Remove existing thumbnail
        if ($request->has('remove_thumbnail') && $portfolio->thumbnail) {
            Storage::disk('public')->delete($portfolio->thumbnail);
            $portfolio->thumbnail = null;
        }

        // Upload new cover image
        if ($request->hasFile('cover_image')) {
            $coverImagePath = $request->file('cover_image')->store('portfolio/cover', 'public');
            $portfolio->cover_image = $coverImagePath;
        }

        // Upload new thumbnail
        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('portfolio/thumbnail', 'public');
            $portfolio->thumbnail = $thumbnailPath;
        }

        $portfolio->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'excerpt' => Str::limit(strip_tags($request->content), 100),
            'content' => $request->content,
            'status' => $request->status ?? 'draft',
            'published_at' => $request->published_at,
        ]);

        return redirect()->route('portfolio.index')->with('success', 'Portfolio updated.');
    }

    // Menghapus data
    public function destroy($id)
    {
        $portfolio = Portfolio::findOrFail($id);
        $portfolio->delete();

        return redirect()->route('portfolio.index')->with('success', 'Portfolio deleted.');
    }
}
