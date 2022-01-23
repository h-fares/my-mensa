<?php

namespace App\Http\Controllers;

use App\Models\User;
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

    public function mensas() {
        #$user = auth()->user();
        return auth()->user()->mensas()->get();
    }
}
