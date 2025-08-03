<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\UserRegistered;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request){
        $user = User::create($request->all());
        dd($user);
        event(new UserRegistered($user));
        return response()->json(['message' => 'User registered successfully']);
    }
    public function userq(Request $request){
        dd($request->all());
    }
}
