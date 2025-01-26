<?php

use App\Http\Controllers\Api\YoutubeController;
use Illuminate\Support\Facades\Route;

Route::get('/statistics/{channel_id}', [YoutubeController::class, 'statistics'])->name('statistics');
