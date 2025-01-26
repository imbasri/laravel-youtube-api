<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController
{
    //
    public function index()
    {
        return Inertia::render('Index');
    }

    public function report()
    {
        return Inertia::render('Dashboard/Report');
    }
    public function management()
    {
        return Inertia::render('Dashboard/Management');
    }
}
