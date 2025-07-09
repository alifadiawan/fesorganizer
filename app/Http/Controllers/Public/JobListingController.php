<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\JobListingsModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobListingController extends Controller
{
    public function index()
    {
        $jobs = JobListingsModel::orderBy("created_at", 'desc')->get();
        return Inertia::render('Career', [
            'featuredJobs' => $jobs,
        ]);

    }
}
