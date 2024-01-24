<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model as Eloquent;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class Book extends Eloquent
{
    use HasFactory, Notifiable;

    protected $connection = "mongodb";
    protected $collection = "books";
    protected $fillable = [
        'title',
        'author',
        'genre',
        'description',
        'ISBN',
        'year',
        'counts',
        'pages',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->validateUniqueISBN();
        });

        // static::updating(function ($model) {
        //     $model->validateUniqueISBN();
        // });
        // static::saving(function ($model) {
        //     $model->validateUniqueISBN();
        // });
    }


    /**
     * Validate unique ISBN.
     */
    public function validateUniqueISBN()
    {
        $rules = [
            'ISBN' => [
                'required',
                'unique:books,ISBN',
            ],
        ];

        $validator = Validator::make($this->attributes, $rules);

        if ($validator->fails()) {
            abort(422, $validator->errors()->first());
        }
    }

    /**
     * Define custom index options.
     *
     * @return array
     */
    public function bookSchema()
    {
        return [
            'indexes' => [
                'unique_isbn' => [
                    'keys' => ['ISBN' => 1],
                    'options' => [
                        'unique' => true,
                    ],
                ],
            ],
        ];
    }
}