<template>
    <div class="m-3">
            <b-card
                :title="mensa.name"
                tag="article"
                style="max-width: 20rem; height: 200px"

                class="mb-2"
            >
                <b-card-text>
                    <strong>Stadt: </strong>
                    {{mensa.city}}
                </b-card-text>

                <router-link :to="{name: 'MensaView', params: {mensaId: mensa.open_mensa_id}}" class="btn btn-dark">Auswählen</router-link>
                <b-button variant="success" @click="setLikedMensa">
                    <b-badge variant="light"><b-icon icon="heart" scale="1"></b-icon></b-badge>
                </b-button>
            </b-card>
    </div>
</template>

<script>
import mensaService from "../service/mensaService";
export default {
    name: "Mensa",
    props: ['mensa'],
    methods: {
        setLikedMensa() {
            mensaService.setLikedMensa(this.mensa.id)
        }
    }
}
</script>

<style scoped>

</style>
