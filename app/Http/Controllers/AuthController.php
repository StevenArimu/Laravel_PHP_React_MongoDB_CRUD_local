<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class AuthController extends Controller
{

    // public function login(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'email|required',
    //         'password' => 'required|string',
    //     ]);
    //     $input = $request->all();
    //     // $user = \Auth::user();
    //     $user = User::find($input['email']);
    //     return response()->json([
    //         'status' => 'true',
    //         'message' => 'user Login Successfully',
    //         'user' => $user,
    //     ]);
    //     // if (\Auth::attempt(["email" => $input["email"], "password" => $input["password"]])) {
    //     //     $user = \Auth::user();
    //     //     $token = $user->createToken("token")->accessToken;
    //     //     return response()->json([
    //     //         'status' => 'true',
    //     //         'message' => 'user Login Successfully',
    //     //         'token' => $token
    //     //     ]);
    //     // }
    // }

    public function login(Request $request)
    {
        $input = $request->all();
        $request->validate([
            'email' => 'email|required',
            'password' => 'required|string',
        ]);
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(
                [
                    "msg" => "user not found",
                    'Target' => $input
                ],
                401
            );
        }

        //CREATE USER TOKEN WITH ROLES THEN RETURN TOKEN WITH COOKIE
        $token = $user->createToken("token")->accessToken;
        $response = [
            'status' => 'true',
            'message' => 'user Login Successfully',
            'user' => $user,
            'token' => $token,
        ];


        return response()->json($response, 201);
    }

    public function loginUserDetail()
    {
        return response()->json(['user' => \Auth::user()]);
    }
    //Register API POST
    public function register(Request $request)
    {
        // //Data validation
        $request->validate([
            'f_name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|confirmed',
        ]);
        $user = new User();
        $user->f_name = $request->f_name;
        $user->l_name = $request->l_name;
        $user->email = $request->email;
        $user->location = $request->location;
        $user->password = Hash::make($request->password);
        $user->remember_token = Str::random(20);
        $user->save();
        // User::create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        //     'remember_token' => Str::random(50),
        // ]);
        $token = $user->createToken("token")->accessToken;

        return response()->json([
            'status' => true,
            'msg' => 'user register Successfully',
            'newUser' => $user,
            'token' => $token,
        ]);
    }
    public function update(Request $request)
    {
        // //Data validation
        $request->validate([
            'f_name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|confirmed',
        ]);
        $user = User::where('_id', $request->updateId)->first();
        $user->f_name = $request->f_name;
        $user->l_name = $request->l_name;
        $user->email = $request->email;
        $user->location = $request->location;
        $user->password = Hash::make($request->password);
        $user->remember_token = Str::random(20);
        $user->save();
        // User::create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        //     'remember_token' => Str::random(50),
        // ]);
        // $token = $user->createToken("token")->accessToken;

        return response()->json([
            'status' => true,
            'msg' => 'user update Successfully',
            "updateUser" => $user
            // 'token' => $token,
        ]);
    }

    public function addUser(Request $request)
    {
        $request->validate([
            'f_name' => 'required',
            'email' => 'required|unique:users',
        ]);
        $user = new User();
        $user->f_name = $request->f_name;
        $user->l_name = $request->l_name;
        $user->email = $request->email;
        $user->location = $request->location;
        $user->remember_token = Str::random(20);
        $user->save();
        return response()->json([
            'status' => true,
            'message' => 'user update Successfully',
            'addUser' => $user,
        ]);
    }
    //Profile API GET
    public function findAll()
    {
        // $user = \Auth::user();
        $users = User::all();
        if (count($users) > 0) { {

                return response()->json([
                    'status' => true,
                    'message' => 'Profile Information',
                    'users' => $users
                ]);
            }
        } else {
            return response()->json(['status' => false, 'message' => 'No Exist users']);
        }
    }
    //Profile Logout
    public function logout()
    {
        \Auth::user()->token()->revoke();
        $user = \Auth::user();
        return response()->json([
            'status' => true,
            'message' => 'user logout Successfully',
            "user" => $user
        ]);
    }
    public function destory(Request $request)
    {
        $id = $request->id;
        $user = User::where('_id', $request->id)->first();
        User::find($id)->delete();
        // User::find($email)->DB::delete('delete users where name = ?', ['email' => $email]);
        return response()->json([
            "user" => $user,
            "status" => true, "msg" => "Data Deleted Successfully",
        ]);
    }
    public function deleteAll()
    {
        $user = User::all()->delete();
        return response()->json(["status" => 200, "message" => "Data Deleted Successfully",]);
    }
}