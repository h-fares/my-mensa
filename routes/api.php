<?php

use App\Http\Controllers\MensaController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function() {
    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/auth/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});

Route::group(['middleware'=>'api'], function() {
    Route::get('/user', [UserController::class, 'user']);
});

Route::group(['middleware'=>'auth:api'], function() {
    Route::post('/mensa/init', [MensaController::class, 'initMensas']);
    Route::get('/mensa', [MensaController::class, 'getAllMensa']);
    Route::get('/mensa/{mensaId}', [MensaController::class, 'getMensa']);
});


