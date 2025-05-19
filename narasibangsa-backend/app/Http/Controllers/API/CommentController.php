<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Article $article)
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required|string',
            'parent_id' => 'nullable|exists:comments,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $comment = $article->comments()->create([
            'content' => $request->content,
            'user_id' => $request->user()->id,
            'parent_id' => $request->parent_id,
            'is_moderated' => false
        ]);

        return response()->json([
            'message' => 'Comment posted successfully',
            'comment' => $comment->load('user')
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        if ($request->user()->id !== $comment->user_id && !in_array($request->user()->role, ['admin', 'editor'])) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'content' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $comment->update([
            'content' => $request->content
        ]);

        return response()->json([
            'message' => 'Comment updated successfully',
            'comment' => $comment->load('user')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        if ($request->user()->id !== $comment->user_id && !in_array($request->user()->role, ['admin', 'editor'])) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $comment->delete();

        return response()->json([
            'message' => 'Comment deleted successfully'
        ]);
    }

    public function moderate(Request $request, Comment $comment)
    {
        if (!in_array($request->user()->role, ['admin', 'editor'])) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $comment->update([
            'is_moderated' => true
        ]);

        return response()->json([
            'message' => 'Comment moderated successfully',
            'comment' => $comment->load('user')
        ]);
    }

    public function userComments(Request $request)
    {
        $comments = Comment::with(['article', 'user'])
            ->where('user_id', $request->user()->id)
            ->latest()
            ->paginate(10);

        return response()->json($comments);
    }
}
