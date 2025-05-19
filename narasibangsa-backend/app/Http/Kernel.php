<?php
Users/adrianhalim/Documents/NarasiBangsa/narasibangsa-backend/app/Http/Kernel.php
protected $routeMiddleware = [
    // ...existing middlewares...
    'role' => \App\Http\Middleware\CheckRole::class,
];