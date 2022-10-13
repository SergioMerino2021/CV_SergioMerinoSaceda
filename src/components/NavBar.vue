<template>
    <div class="w-full flex flex-row items-center bg-slate-500/20 py-5 flex-wrap gap-3 justify-around">
        <router-link class="px-10 py-3 bg-green-500 rounded-md  hover:bg-green-700 hover:text-white transition-all flex-1" to="/">Inicio</router-link>
        <router-link class="px-10 py-3 bg-green-500 rounded-md  hover:bg-green-700 hover:text-white transition-all flex-1" to="/info">Sobre Mi</router-link>
        <router-link class="px-10 py-3 bg-green-500 rounded-md  hover:bg-green-700 hover:text-white transition-all flex-1" to="/habilidades">Habilidades</router-link>
        <router-link class="px-10 py-3 bg-green-500 rounded-md  hover:bg-green-700 hover:text-white transition-all flex-1" to="/educacion">Educación</router-link>
        <router-link class="px-10 py-3 bg-green-500 rounded-md  hover:bg-green-700 hover:text-white transition-all flex-1" to="/experiencias">Experencia</router-link>
        <router-link class="px-10 py-3 bg-green-500 rounded-md  hover:bg-green-700 hover:text-white transition-all flex-1" to="/proyectos">Proyectos</router-link>
        
    </div>

</template>

<script>
export default {

}
</script>

<style>
.router-link-exact-active {
    color:blue;
    text-decoration-line: underline overline;
    font-size:large;
}
</style>