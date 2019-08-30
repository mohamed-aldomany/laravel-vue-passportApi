<?php

Route::post('login', 'API\AuthController@login');
Route::post('register', 'API\AuthController@register');

Route::group(['middleware' => 'auth:api'], function () {
    Route::resource('article', 'ArticleController');
    Route::post('details', 'API\AuthController@details');
    Route::post('logout', 'API\AuthController@logout');
});
