<template>
  <div class="w-full flex justify-center items-center flex-col md:flex-row h-screen bg-gradient-to-r from-cyan-300 to-blue-800">
    <div class="w-full md:w-6/12 flex flex-col justify-center items-center gap-10 ">
      <!--<img src="../assets/logo.png"/>-->
      <h1 class="text-6xl">SERGIO</h1>
      <h1 class="text-6xl">Merino Saceda</h1>
    </div>

    <div class="w-full md:w-6/12 flex flex-col justify-center items-start gap-9">
      <div class="bg-slate-500 rounded-md text-white p-10 flex flex-col items-start gap-3 hover:scale-105 text-md md:text-3xl transition-all hover:shadow-xl m-auto">
        <p>Tel: 644802030</p>
        <p>Ubi.: L'Hospitalet de LLobregat (Centro)</p>
        <p>Email: sergio.comsace@gmail.com</p>
        <p>Edad: {{edad}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edad:0
    }
  },

  mounted() {
    var birth_year = 2001
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var age = today_year - birth_year;
    this.edad=age;
  },

}
</script>

<style>

</style>