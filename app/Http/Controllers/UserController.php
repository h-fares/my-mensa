<?php

namespace App\Http\Controllers;


use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * Get the authenticated User.
     *
     * @return JsonResponse
     */
    public function user(): JsonResponse{
        return response()->json(auth()->user());
    }

    /**
     * Get all liked mensa for one user
     * @return mixed
     */
    public function mensas() {
        return auth()->user()->mensas()->get();
    }
}
