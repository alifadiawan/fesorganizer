<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CategoryModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = CategoryModel::all();
        return view('Admin.Category.Index', compact('categories'));
    }

    // Show form to create a new category
    public function create()
    {
        return view('Admin.Category.Create');
    }

    // Store new category
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        CategoryModel::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'status' => $request->status ?? 'active',
        ]);

        return view('Admin.Category.Index')->with('success', 'Category created successfully.');
    }

    // Show form to edit a category
    public function edit($id)
    {
        $category = CategoryModel::findOrFail($id);
        return view('Admin.Category.Edit', compact('category'));
    }

    // Update category
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $category = CategoryModel::findOrFail($id);
        $category->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'status' => $request->status ?? $category->status,
        ]);

        return redirect()->route('Admin.Category.Index')->with('success', 'Category updated successfully.');
    }

    // Delete category
    public function destroy($id)
    {
        $category = CategoryModel::findOrFail($id);
        $category->delete();

        return redirect()->route('Admin.Category.index')->with('success', 'Category deleted successfully.');
    }
}
