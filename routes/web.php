<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'index'])->name('index');
Route::get('/{dashboard}', [DashboardController::class, 'index'])->name('index');
Route::get('/report', [DashboardController::class, 'report'])->name('report');
Route::get('/management', [DashboardController::class, 'management'])->name('management');
// require __DIR__.'/auth.php';
