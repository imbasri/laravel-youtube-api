<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\CustomException;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Throwable;

use function PHPSTORM_META\map;

class YoutubeController extends Controller
{
    protected $baseUrl = 'https://youtube.googleapis.com/youtube/v3/';

    public function channelId(Request $request)
    {
        try {
            if (empty($request->channel_id)) {
                throw new Exception('Channel ID is required');
            }
            return response()->json([
                'channel_id' => $request->channel_id,
                'status' => 'success',
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'error' => true,
                'message' => $th->getMessage(),
                'statusCode' => 400
            ]);
        }
    }



    public function getVideos(Request $request)
    {
        try {
            if (empty($request->channel_id)) {
                throw new CustomException('Channel not found', 404);
            }
            $response = Http::get($this->baseUrl . 'search', [
                'part' => 'snippet',
                'id' => $request->channel_id,
                'maxResults' => 10,
                'order' => 'date',
                'type' => 'video',
                'key' => env('YOUTUBE_API_KEY')
            ]);
            $data = $response->json();
            if (isset($data['error'])) {
                throw new CustomException($data['error']['message'], $data['error']['code']);
            }

            $collection = collect($data['items']);
            $collection = $collection->map(function ($item) {
                return [
                    'videos' => [
                        'title' => $item['snippet']['title'],
                        'description' => $item['snippet']['description'],
                        'thumbnail' => $item['snippet']['thumbnails']['default']['url'],
                        'url' => 'https://www.youtube.com/watch?v=' . $item['id']['videoId'],
                        'published_at' => ($item['snippet']['publishedAt']),
                        'sortDate' => Carbon::parse($item['snippet']['publishedAt'])->diffForHumans(),
                    ]
                ];
            });
            // sort by date
            $sorted = $collection->sortDesc();
            $sorted->values()->all();
            return response()->json($sorted);
        } catch (Exception $e) {
            return throw new CustomException($e->getMessage(), $e->getCode());
        }
    }
    public function statistics(Request $request)
    {
        try {
            if (empty($request->channel_id)) {
                throw new CustomException('Channel not found', 404);
            }
            $response = Http::get($this->baseUrl . 'channels', [
                'part' => 'snippet,statistics',
                'id' => $request->channel_id,
                'key' => env('YOUTUBE_API_KEY')
            ]);
            $data = $response->json();
            return response()->json([
                'result' => [
                    'nama_channel' => $data['items'][0]['snippet']['title'],
                    'jumlah_subscriber' => $data['items'][0]['statistics']['subscriberCount'],
                    'total_view' => $data['items'][0]['statistics']['viewCount'],
                    'total_video' => $data['items'][0]['statistics']['videoCount'],
                ]
            ]);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return throw new CustomException("data channel id tidak ditemukan ", $e->getCode());
        }
    }
}
