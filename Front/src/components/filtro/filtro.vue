<template>
    <div>
        <filtroTipo @cambioTipo="actualizarFiltro" :opciones="tipos" />
        <filtroGenero @cambioGenero="actualizarFiltro" :opciones="generos" />
        <filtroYear @cambioYear="actualizarFiltro" :opciones="year" />
        <button @click="filtrar">Filtrar</button>
    </div>
</template>

<script>
// Importar componentes de filtro
import filtroTipo from "./filtroTipo.vue";
import filtroGenero from "./filtroGenero.vue";
import filtroYear from "./filtroYear.vue";

export default {
    // Importar componentes de filtro
    components: {
        filtroTipo,
        filtroGenero,
        filtroYear,
    },
    data() {
        return {
            // Variables de datos para filtros
            filtros: {
                tipo: null,
                genero: null,
                year: null,
            },
            // Variables de datos para filtros
            tipos: ["Pelicula", "Serie"],
            generos: ["Acción", "Comedia", "Drama", "Ciencia ficción"],
            year: [2023, 2022, 2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000],
        };
    },
    methods: {
        actualizarFiltro(nombreFiltro, valor) {
            this.$set(this.filtros, nombreFiltro, valor);
        },
        filtrar() {
            // Lógica para aplicar filtros y mostrar películas/series según los filtros seleccionados
        },
    },
};
</script>
