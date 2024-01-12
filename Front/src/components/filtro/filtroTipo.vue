<template>
    <div>
        <label for="type">Tipo:</label>
        <select v-model="filtroSeleccionado" id="type">
            <option v-for="opcion in opciones" :key="opcion">{{ opcion }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: ['opciones'],
    data() {
        return {
            filtroSeleccionado: null,
        };
    },
    watch: {
        filtroSeleccionado() {
            this.$emit("cambioTipo", this.filtroSeleccionado);
        },
    },
    mounted() {
        // Configuración inicial, carga de datos, etc.
    },
};
</script>
