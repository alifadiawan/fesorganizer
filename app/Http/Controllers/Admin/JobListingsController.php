<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobListingsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class JobListingsController extends Controller
{
    public function index()
    {
        $jobs = JobListingsModel::latest()->paginate(10); // Get latest jobs, paginated
        return view('Admin.JobListings.index', compact('jobs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Admin.JobListings.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'required',
            'salary' => 'nullable',
            'status' => 'nullable',
            'external_link' => 'nullable|string',
            'postedDate' => 'required|date',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:6144', // Max 6MB
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('job_images'), $imageName);
            $data['image'] = $imageName;
        }

        JobListingsModel::create($data);

        return redirect()->route('admin.jobs.index')
            ->with('success', 'Job created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(JobListingsModel $job)
    {
        return view('jobs.show', compact('job'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobListingsModel $job)
    {
        return view('Admin.JobListings.edit', compact('job'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, JobListingsModel $job)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'required',
            'salary' => 'nullable',
            'status' => 'nullable',
            'postedDate' => 'required|date',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:6144',
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($job->image && Storage::exists('public/job_images/' . $job->image)) {
                Storage::delete('public/job_images/' . $job->image);
            }

            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('job_images'), $imageName);
            $data['image'] = $imageName;
        }

        $job->update($data);

        return redirect()->route('admin.jobs.index')
            ->with('success', 'Job updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobListingsModel $job)
    {
        // Delete image if it exists
        if ($job->image && Storage::exists('public/job_images/' . $job->image)) {
            Storage::delete('public/job_images/' . $job->image);
        }

        $job->delete();

        return redirect()->route('admin.jobs.index')
            ->with('success', 'Job deleted successfully.');
    }
}
