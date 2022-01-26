<template>
    <div class="m-3">
        <b-card
            :title="meal.name"
            tag="article"
            style="width: 100%; height: 400px; font-size: .7em; font-weight: bold;"

            class="mb-2"
        >
            <b-card-text  style="font-size: 2rem;">
                <h4>Preise: </h4>
                <strong>Student:</strong> {{meal.prices.students}} €
                <br>
                <strong>Mitarbeiter:</strong> {{meal.prices.employees}} €
                <br>
                <strong>Gast:</strong> {{meal.prices.others}} €
                <h4>Kategorie: </h4>
                {{meal.category}}
            </b-card-text>

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
