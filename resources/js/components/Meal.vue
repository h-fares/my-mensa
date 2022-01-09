<template>
    <div class="m-3">
        <b-card
            :title="meal.name"
            tag="article"
            style="max-width: 20rem; height: 400px"

            class="mb-2"
        >
            <b-card-text>
                <h4>Preise: </h4>
                <strong>Student:</strong> {{meal.prices.students}} €
                <br>
                <strong>Mitarbeiter:</strong> {{meal.prices.employees}} €
                <br>
                <strong>Gast:</strong> {{meal.prices.others}} €
            </b-card-text>
            <h4>Kategorie: </h4>
            {{meal.category}}
        </b-card>
    </div>
</template>

<script>
export default {
    name: "Meal",
    props: ['meal']
}
</script>

<style scoped>

</style>
