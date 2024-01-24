<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'f_name' => 'Doe',
            'l_name' => 'John',
            'email' => 'JohnDoe@gmail.com',
            'location' => 'Germany',
            'password' => bcrypt(123456),
            'remember_token' => Str::random(50),
        ]);
        // $data["name"] = "JohnDoe";
        // $data["email"] = "JohnDoe@gmail.com";
        // $data["password"] = bcrypt(123456);
        // $data["remember_token"] = Str::random(10);
        // \App\Models\User::create();
    }
}
