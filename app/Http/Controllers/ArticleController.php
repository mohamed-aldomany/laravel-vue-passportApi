<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use App\Http\Resources\Article as ArticleResource;
class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::all();
        // return ArticleResource::collection($article);
        return response()->json([
            'articles' => $articles
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $article = $request->isMethod('put')? Article::findOrFail($request->id) : new Article();
        $article = new Article();
        $article->title = $request->title;
        $article->body = $request->body;
        if ($article->save()) {
            // return new ArticleResource($article);
            return response()->json([
                'article' => $article
            ], 200);
        }
    }

    public function update(Request $request,$id)
    {
        // $article = $request->isMethod('put')? Article::findOrFail($request->id) : new Article();
        $article = Article::findOrFail($id);
        $article->title = $request->title;
        $article->body = $request->body;
        if ($article->save()) {
            // return new ArticleResource($article);
            return response()->json([
                'article' => $article
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $article = Article::findOrFail($id);
        return response()->json([
            'article' => $article
        ], 200);
        // return new ArticleResource($article);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $article = Article::findOrFail($id);
        if ($article->delete()) {
            return new ArticleResource($article);
        }
    }
}
