<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class BookController extends Controller
{

    public function addBook(Request $request)
    {
        // $test = $request->all();
        $book = new Book();
        $book->title = $request->title;
        $book->author = $request->author;
        $book->genre = $request->genre;
        $book->description = $request->description;
        $book->ISBN = $request->ISBN;
        $book->year = $request->year;
        $book->counts = $request->counts;
        $book->pages = $request->pages;
        $book->save();
        $response = [
            'status' => 'true',
            'msg' => 'Add Book Successfully',
            'book' => $book
        ];


        return response()->json($response, 201);
    }

    public function findAll()
    {
        // $user = \Auth::user();
        $book = Book::all();
        if (count($book) > 0) { {

                return response()->json([
                    'status' => true,
                    'msg' => 'All books finding successfully',
                    'books' => $book
                ]);
            }
        } else {
            return response()->json(['status' => false, 'msg' => 'No Exist books']);
        }
    }
    public function findOne(Request $request)
    {
        $id = $request->id;
        if (!$id) {
            return response()->json(['status' => false, 'msg' => 'bookId is required']);
        }
        $book = Book::find($request->id);
        if ($book) {
            return response()->json([
                'status' => true,
                'msg' => 'book find successfully',
                'book' => $book,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'book is not exists',
                'book' => null,
            ]);
        }
    }
    public function deleteBook(Request $request)
    {
        $id = $request->id;
        if (!$id) {
            return response()->json(['status' => false, 'msg' => 'bookId is required']);
        }
        $book = Book::find($id);
        if ($book) {
            $book->delete();
            return response()->json(['status' => true, 'msg' => 'Book delete successfully', 'book' => $book]);
        } else {
            return response()->json(['status' => false, 'msg' => 'Book is not exists']);
        }
    }
    public function updateBook(Request $request)
    {
        $id = $request->id;
        if (!$id) {
            return response()->json(['status' => false, 'msg' => 'bookId is required']);
        }
        $book = Book::find($id);
        if ($book) {
            if ($request->title) {
                $book->title = $request->title;
            }
            if ($request->description) {
                $book->description = $request->description;
            }
            if ($request->author) {
                $book->author = $request->author;
            }
            if ($request->genre) {
                $book->genre = $request->genre;
            }
            if ($request->ISBN) {
                $book->ISBN = $request->ISBN;
            }
            if ($request->year) {
                $book->year = $request->year;
            }
            if ($request->counts) {
                $book->counts = $request->counts;
            }
            if ($request->pages) {
                $book->pages = $request->pages;
            }
            return response()->json(['status' => true, 'msg' => "book updated successfully", 'book' => $book]);
        } else {
            return response()->json(['status' => false, 'msg' => 'book is not exists']);
        }
    }
    public function deleteAllBook(Request $request)
    {
        // $books = Book::all()->delete();
        $books = Book::query()->delete();
        return response()->json(["status" => 200, "msg" => "Data Deleted Successfully", "books" => $books]);
    }

    //Register API POST
    // public function register(Request $request)
    // {
    //     // //Data validation

    //     $book = new Book();
    //     $book->f_name = $request->f_name;
    //     $book->l_name = $request->l_name;
    //     $book->email = $request->email;
    //     $book->location = $request->location;
    //     $book->password = Hash::make($request->password);
    //     $book->remember_token = Str::random(20);
    //     $book->save();
    //     // User::create([
    //     //     'name' => $request->name,
    //     //     'email' => $request->email,
    //     //     'password' => Hash::make($request->password),
    //     //     'remember_token' => Str::random(50),
    //     // ]);
    //     $token = $book->createToken("token")->accessToken;

    //     return response()->json([
    //         'status' => true,
    //         'msg' => 'user register Successfully',
    //         'newUser' => $book,
    //         'token' => $token,
    //     ]);
    // }
    // public function update(Request $request)
    // {
    //     // //Data validation
    //     $request->validate([
    //         'f_name' => 'required',
    //         'email' => 'required|unique:users',
    //         'password' => 'required|confirmed',
    //     ]);
    //     $book = Book::where('_id', $request->updateId)->first();
    //     $book->f_name = $request->f_name;
    //     $book->l_name = $request->l_name;
    //     $book->email = $request->email;
    //     $book->location = $request->location;
    //     $book->password = Hash::make($request->password);
    //     $book->remember_token = Str::random(20);
    //     $book->save();
    //     // User::create([
    //     //     'name' => $request->name,
    //     //     'email' => $request->email,
    //     //     'password' => Hash::make($request->password),
    //     //     'remember_token' => Str::random(50),
    //     // ]);
    //     // $token = $user->createToken("token")->accessToken;

    //     return response()->json([
    //         'status' => true,
    //         'msg' => 'user update Successfully',
    //         "updateUser" => $book
    //         // 'token' => $token,
    //     ]);
    // }

    // public function addUser(Request $request)
    // {
    //     $request->validate([
    //         'f_name' => 'required',
    //         'email' => 'required|unique:users',
    //     ]);
    //     $book = new Book();
    //     $book->f_name = $request->f_name;
    //     $book->l_name = $request->l_name;
    //     $book->email = $request->email;
    //     $book->location = $request->location;
    //     $book->remember_token = Str::random(20);
    //     $book->save();
    //     return response()->json([
    //         'status' => true,
    //         'msg' => 'user update Successfully',
    //         'addUser' => $book,
    //     ]);
    // }
    // //Profile API GET
    // //Profile Logout

    // public function destory(Request $request)
    // {
    //     $id = $request->id;
    //     $user = Book::where('_id', $request->id)->first();
    //     User::find($id)->delete();
    //     // User::find($email)->DB::delete('delete users where name = ?', ['email' => $email]);
    //     return response()->json([
    //         "user" => $user,
    //         "status" => true, "msg" => "Data Deleted Successfully",
    //     ]);
    // }
    // public function deleteAll()
    // {
    //     $user = User::all()->delete();
    //     return response()->json(["status" => 200, "msg" => "Data Deleted Successfully",]);
    // }
}