<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMensasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mensas', function (Blueprint $table) {
            $table->id();
            $table->integer("open_mensa_id");
            $table->string("name");
            $table->string("address");
            $table->string("coordinatesX");
            $table->string("coordinatesY");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mensas');
    }
}
