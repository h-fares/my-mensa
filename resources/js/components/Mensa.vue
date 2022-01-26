<template>
    <div class="m-3">
            <b-card
                :title="mensa.name"
                tag="article"
                style="width: 100%; height: 200px; font-size: .1em;"

                class="mb-2"
            >
                <b-card-text style="font-size:1.5rem;">
                    <strong>Stadt: </strong>
                    {{mensa.city}}
                </b-card-text>

                <router-link :to="{name: 'MensaView', params: {mensaId: mensa.open_mensa_id}}" class="btn btn-dark">Auswählen</router-link>
                <b-button variant="success" @click="manageLikedMensa">
                    <b-badge variant="light"><b-icon :icon="likeIcon"></b-icon></b-badge>
                </b-button>
            </b-card>
    </div>
</template>

<script>
import mensaService from "../service/mensaService";
export default {
    name: "Mensa",
    props: ['mensa', 'isLiked'],
    methods: {
        manageLikedMensa() {
            if(this.isLiked) mensaService.setNotLikedMensa(this.mensa.id).then(response => {
                window.location.reload()
            })
            else mensaService.setLikedMensa(this.mensa.id).then(response => {
                window.location.reload()
            })

        }
    },
    computed: {
        likeIcon() {
            if(this.isLiked) return 'heart-fill'
            else return 'heart'
        }
    }
}
</script>

<style scoped>

</style>
