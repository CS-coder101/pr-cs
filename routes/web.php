<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CharacterController;

Route::get('/projects', [ProjectController::class, 'index']);
Route::inertia('/', 'welcome')->name('home');
Route::get('/characters', [CharacterController::class, 'index'])->name('characters.index');
Route::post('/characters', [CharacterController::class, 'store'])->name('characters.store');