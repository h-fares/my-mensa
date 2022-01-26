<?php

namespace App\Http\Controllers;

use App\Models\Mensa;
use App\Models\UserMensa;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class MensaController extends Controller
{
    /**
     * Save (initialized) mensas in DB
     * @param Request $request
     */
     public function initMensas(Request $request) {
        $openMensa = [];
         foreach ($request->openMensa as $mensa) {
             $mensa = (object)$mensa;
             array_push($openMensa, [
                 'open_mensa_id' => $mensa->id,
                 'name' => $mensa->name,
                 'address' => $mensa->address ?? '',
                 'city' => $mensa->city,
                 'coordinatesX' => $mensa->coordinates[0] ?? '',
                 'coordinatesY' => $mensa->coordinates[1] ?? ''
             ]);
         }
         Mensa::insert($openMensa);
     }

    /**
     * Get all Mensa from DB
     * @return Mensa[]|Collection
     */
     public function getAllMensa() {
         return Mensa::all();
     }

    /**
     * Get one Mensa
     * @param $mensaId
     * @return mixed
     */
     public function getMensa($mensaId) {
         return Mensa::find($mensaId);
     }

    /**
     * Set mensa as liked mensa
     * @param $mensaId
     */
     public function setLikedMensa($mensaId) {
        $userId = $user = auth()->user()->id;

        UserMensa::insert([
            'user_id' => $userId,
            'mensa_id' => $mensaId
        ]);
     }

    /**
     * Set mensa as not liked mensa
     * @param $mensaId
     */
     public function setNotLikedMensa($mensaId) {
         $userId = $user = auth()->user()->id;

         UserMensa::whereUserId($userId)->whereMensaId($mensaId)->delete();

    }

    /**
     * Get all not liked Mensa
     * @return string
     */
    public function getNotLikedMensa(): string {

        $userId = $user = auth()->user()->id;
        $userMensasId = UserMensa::whereUserId($userId)->pluck('mensa_id');

        return Mensa::whereNotIn('id', $userMensasId)->get();
    }
}
