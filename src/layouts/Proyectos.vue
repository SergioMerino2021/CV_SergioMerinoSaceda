<template>
<div class="w-full py-3 flex flex-row justify-around justify-items-center">

  
  <button @click="GitEscuela" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Escuela</button>
  <button @click="GitPersonal" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Personal</button>
  

</div>
<div class="w-full h-full flex flex-col justify-center items-center bg-slate-800 gap-10 py-10">
  <div class="w-8/12 py-10 bg-white ">
      <div class="py-10">
        <a :href="link">
          <h1 class="text-2xl md:text-5xl underline decoration-4">Proyectos ({{cuenta}})</h1>
        </a>
        
      </div>
  </div>

  <GitHub v-for="rep in respo" :key="rep.id" :repo=rep />
    

    
</div>
</template>

<script>
import axios from 'axios';
import TensorflowJs from '@/components/TensorflowJs.vue';
import GitHub from '@/components/GitHub.vue';
export default {
  components: { TensorflowJs, GitHub },
  data() {
    return {
      Git: 'SergioMerinoSaceda',
      respo: null,
      cuenta: null,
      link:null
    }
  },
  methods: {
    GitEscuela(){
      this.Git = 'SergioMerino2021';
      this.cuenta = 'Escuela';
      this.respo = null;
      this.link='https://github.com/SergioMerino2021'
      this.Cargar()
    },
    GitPersonal(){
      this.Git = 'SergioMerinoSaceda';
      this.cuenta = 'Personal';
      this.respo = null;
      this.link='https://github.com/SergioMerinoSaceda'
      this.Cargar()
    },
    async Cargar(){
      const url = "https://api.github.com/users/"+this.Git+"/repos";
      const resul = await axios({
          method: 'get',
          url,   
      });
      var urls=[]
      for (let i = 0; i < resul.data.length; i++) {
          
          urls.push({url:resul.data[i].html_url, desc:resul.data[i].description, homepage:resul.data[i].homepage})
          
      }
      this.respo = urls;
      
    }
  },
  mounted() {
    this.GitPersonal();
  }
}
</script>

<style>

</style>