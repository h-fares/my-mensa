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
            </b-card>
    </div>
</template>

<script>
export default {
    name: "Mensa",
    props: ['mensa']
}
</script>

<style scoped>

</style>
