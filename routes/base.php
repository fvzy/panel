<?php

use Pterodactyl\Http\Controllers\Base;
use Pterodactyl\Http\Middleware\RequireTwoFactorAuthentication;

Route::get('/', [Base\IndexController::class, 'index'])->name('index')->fallback();
Route::get('/account', [Base\IndexController::class, 'index'])
    ->withoutMiddleware(RequireTwoFactorAuthentication::class)
    ->name('account');

Route::get('/locales/locale.json', Base\LocaleController::class)
    ->withoutMiddleware(['auth', RequireTwoFactorAuthentication::class])
    ->where('namespace', '.*');

Route::get('/{react}', [Base\IndexController::class, 'index'])
    ->where('react', '^(?!(\/)?(api|auth|admin|daemon)).+');
/*
|--------------------------------------------------------------------------
| Cloud Servers Controller Routes
|--------------------------------------------------------------------------
|
| Endpoint: /cloudservers
|
*/
Route::group(['prefix' => 'cloudservers'], function () {
    Route::get('/choose/game', 'CloudServersController@choose')->name('cloudservers.choose');
    
    Route::group(['prefix' => 'game'], function () {
        Route::get('/configuration/{id}', 'CloudServersController@game')->name('cloudservers.game');
        Route::post('/create/{id}', 'CloudServersController@creategame')->name('cloudservers.game.create');
    });
});
