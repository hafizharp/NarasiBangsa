<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Article::with(['author', 'category', 'tags'])
            ->when($request->category, function($q) use ($request) {
                return $q->where('category_id', $request->category);
            })
            ->when($request->tag, function($q) use ($request) {
                return $q->whereHas('tags', function($query) use ($request) {
                    $query->where('slug', $request->tag);
                });
            })
            ->when($request->search, function($q) use ($request) {
                return $q->where('title', 'like', "%{$request->search}%");
            });

        $articles = $query->latest()->paginate(12);

        return response()->json($articles);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'thumbnail' => 'nullable|image|max:2048',
            'tags' => 'array',
            'tags.*' => 'exists:tags,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $article = new Article($request->all());
        $article->slug = Str::slug($request->title);
        $article->author_id = $request->user()->id;
        
        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('thumbnails', 'public');
            $article->thumbnail = $path;
        }

        $article->save();

        if ($request->has('tags')) {
            $article->tags()->sync($request->tags);
        }

        return response()->json([
            'message' => 'Article created successfully',
            'article' => $article->load(['author', 'category', 'tags'])
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $article = Article::with(['author', 'category', 'tags'])
            ->where('slug', $slug)
            ->firstOrFail();

        $article->incrementViews();

        return response()->json($article);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'thumbnail' => 'nullable|image|max:2048',
            'tags' => 'array',
            'tags.*' => 'exists:tags,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $article->fill($request->all());
        
        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('thumbnails', 'public');
            $article->thumbnail = $path;
        }

        $article->save();

        if ($request->has('tags')) {
            $article->tags()->sync($request->tags);
        }

        return response()->json([
            'message' => 'Article updated successfully',
            'article' => $article->load(['author', 'category', 'tags'])
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();
        $article->delete();

        return response()->json([
            'message' => 'Article deleted successfully'
        ]);
    }
}
