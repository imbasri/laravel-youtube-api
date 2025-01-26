<?php

use App\Http\Controllers\Api\YoutubeController;
use App\Http\Middleware\HandleErrors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

 Route::group(['prefix' => 'youtube'], function () {
    Route::get('/channel/{channel_id}', [YoutubeController::class, 'channelId'])->name('youtube.channelId');
    Route::get('/videos/{channel_id}', [YoutubeController::class, 'getVideos'])->name('youtube.videos');
    Route::get('/statistic/{channel_id}', [YoutubeController::class, 'statistics'])->name('youtube.statistics');
})->middleware(HandleErrors::class);
