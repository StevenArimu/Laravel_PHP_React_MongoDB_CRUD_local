<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Public Routes
Route::get('/ping', function () {
    phpinfo();
});
Route::get('/dbConnect', function (Request  $request) {
    $connection = DB::connection('mongodb');
    $msg = 'MongoDB is accessible!';
    try {
        $connection->command(['ping' => 1]);
    } catch (\Exception  $e) {
        $msg = 'MongoDB is not accessible. Error: ' . $e->getMessage();
    }
    return ['msg' => $msg];
});
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::delete('deleteAll ', [AuthController::class, 'deleteAll']);

//Protected Routes
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('addUser', [AuthController::class, 'addUser']);
    Route::put('update', [AuthController::class, 'update']);
    Route::get('userDetails', [AuthController::class, 'loginUserDetail']);
    Route::get('findAll', [AuthController::class, 'findAll']);
    Route::post('destory', [AuthController::class, 'destory']);
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::prefix('books')->group(function () {
    Route::get('/', [BookController::class, 'findOne']);
    Route::delete('/', [BookController::class, 'deleteBook']);
    Route::delete('all', [BookController::class, 'deleteAllBook']);
    Route::get('all', [BookController::class, 'findAll']);
    Route::post('add', [BookController::class, 'addBook']);
    Route::put('update', [BookController::class, 'updateBook']);
});