<?php

use App\Exceptions\CustomException;
use App\Http\Middleware\HandleErrors;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->use([
            HandleErrors::class
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //only api
        $exceptions->render(function (\Exception $e, $request) {
            if ($request->is('api/*')) {
               return throw new CustomException($e->getMessage(), $e->getCode());
            }
        });
    })->create();
