<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class DashboardController extends Controller
{
    public function load_dashboard (){
        return view('dashboard');
    }

    public function get_weather(){
        try {
            $response = Http::get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/90018/'. now()->format('Y-m-d') .'?key='. env('WEATHER_VISUALCROSSING_API_KEY'));
            $weather = $response->json();


            return response()->json([$weather]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }
}
