<?php

namespace App\Http\Controllers;

use App\Models\Mensa;
use Illuminate\Http\Request;

class MensaController extends Controller
{
     public function initMensas(Request $request) {
        $openMensa = [];
         foreach ($request->openMensa as $mensa) {
             $mensa = (object)$mensa;
             array_push($openMensa, [
                 'open_mensa_id' => $mensa->id,
                 'name' => $mensa->name,
                 'address' => $mensa->address,
                 'city' => $mensa->city,
                 'coordinatesX' => $mensa->coordinates[0],
                 'coordinatesY' => $mensa->coordinates[1]
             ]);
         }
         Mensa::insert($openMensa);
     }

     public function getAllMensa() {
         return Mensa::all();
     }

     public function getMensa($mensaId) {
         return Mensa::find($mensaId);
     }
}
