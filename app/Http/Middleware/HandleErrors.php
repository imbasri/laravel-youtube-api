<?php

namespace App\Http\Middleware;

use App\Exceptions\CustomException;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HandleErrors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            return $next($request);
        } catch (CustomException $exception) {
            return response()->json([
                'error' => true,
                'statusCode' => $exception->getCode(),
                'message' => $exception->getMessage(),
            ], $exception->getCode() ?: 400);
        }
    }
}
