<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CharacterController extends Controller
{
    public function index()
    {
        return Inertia::render('Characters/Index', [
            'characters' => Character::latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'clan' => 'required|string|max:255',
            'generation' => 'required|integer|min:1|max:15',
        ]);

        Character::create($validated);
        return redirect()->back();
    }
}
