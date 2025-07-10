<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\JobListingsController;
use App\Http\Controllers\Admin\PortfolioController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Public\JobListingController;
use App\Models\JobListingsModel;
use App\Models\Portfolio;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'jobListings' => JobListingsModel::paginate(5),
        'events' => Portfolio::paginate(5),

        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// joblisting public
Route::get('/career', [JobListingController::class, 'index'])->name('public.career.index');


// categories
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
Route::get('/categories/create', [CategoryController::class, 'create'])->name('categories.create');
Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
Route::get('/categories/{id}/edit', [CategoryController::class, 'edit'])->name('categories.edit');
Route::put('/categories/{id}', [CategoryController::class, 'update'])->name('categories.update');
Route::delete('/categories/{id}', [CategoryController::class, 'destroy'])->name('categories.destroy');

// portfolio
Route::get('/admin/portfolio', [PortfolioController::class, 'index'])->name('portfolio.index');
Route::get('/admin/portfolio/create', [PortfolioController::class, 'create'])->name('portfolio.create');
Route::post('/admin/portfolio', [PortfolioController::class, 'store'])->name('portfolio.store');
Route::get('/admin/portfolio/{id}/edit', [PortfolioController::class, 'edit'])->name('portfolio.edit');
Route::put('/admin/portfolio/{id}', [PortfolioController::class, 'update'])->name('portfolio.update');
Route::delete('/admin/portfolio/{id}', [PortfolioController::class, 'destroy'])->name('portfolio.destroy');

Route::get('/portfolio', function (){
    return Inertia::render('PortofolioIndex', [
        'portfolioItems' => Portfolio::paginate(20),
    ]);
})->name('public.portfolio.index');
Route::get('/portfolio/{slug}', function (){
    return Inertia::render('PortofolioShow', [
        'portfolio' => Portfolio::where('slug', request()->slug)->firstOrFail(),
    ]);
})->name('public.portfolio.show');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


/* 
*=================
* Admin Routes
*==================
*/
Route::prefix('/admin')->name('admin.')->middleware(['web', 'auth'])->group(function(){

    Route::get('/dashboard', function(){
        return view('Admin.Dashboard');
    })->name('dashboard');

    // Jobs Listings Routes Admin
    Route::resource('jobs', JobListingsController::class);

});





require __DIR__.'/auth.php';
