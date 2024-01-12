<template>
    <div class="container">
        <aside v-if="isAsideVisible">
            <h1>Menu de Usuarios</h1>
            <img src="../assets/img/ElPadrinoGato.svg" alt="">
            <button @click="showComponent(home)">Home</button>
            <button @click="showComponent(catalogo)">Catalogo</button>
            <button @click="showComponent(perfil)">Perfil</button>
            <button @click="showComponent(about)">About Us</button>
            <button @click="showComponent(contact)">Contact</button>
        </aside>
        <aside v-else>
            <h1>Admin</h1>
            <img src="../assets/img/dog-perfil.jpeg" alt="">
            <button @click="showComponent('Component1')">Configuración</button>
            <button @click="showComponent('Component2')">Lista de Usuarios</button>
            <button @click="showComponent('Component3')">Añadir Ficha</button>
            <button @click="showComponent('Component4')">Componente 4</button>
            <button @click="showComponent('Component5')">Componente 5</button>
        </aside>
        <component :is="selectedComponent" v-if="selectedComponent" />
        <a href="#"><img class="flecha" src="../assets/img/flecha.png" alt=""></a>
        <div class="plegar">
            <img class="flecha-plegar" v-if="isPlegarVisible" @click="alternarImagen" src="../assets/img/plegar.svg" alt="">
            <img class="flecha-extender" v-if="isExtenderVisible" @click="alternarImagen" src="../assets/img/extender.svg"
                alt="">
        </div>
    </div>
    <div class="welcome">
        <h2>{{ welcomeMessage }}</h2>
    </div>
</template>

<script setup>
import { ref, } from 'vue';
import { welcomeMessage } from '@/assets/mensajes/welcome';
import home from './home.vue';
import contact from './contact.vue';
import catalogo from './catalogo.vue';
import about from './about.vue';
import perfil from './perfil.vue';

const selectedComponent = ref(null);

const showComponent = async (component) => {
    try {
        selectedComponent.value = component;
    } catch (error) {
        console.log('Error al cargar el componente', error);
    }
}

const isPlegarVisible = ref(true);
const isExtenderVisible = ref(false);
const isAsideVisible = ref(true);

const alternarImagen = () => {
    isPlegarVisible.value = !isPlegarVisible.value;
    isExtenderVisible.value = !isExtenderVisible.value;
    isAsideVisible.value = !isAsideVisible.value;
}

</script>

<style>
@import '../assets/scss/global.scss';
@import '../assets/scss/navegador.scss';
@import '../assets/scss/home.scss';
@import '../assets/scss/contact.scss';
@import '../assets/scss/catalogo.scss';
@import '../assets/scss/about.scss';
@import '../assets/scss/perfil.scss';
</style>
