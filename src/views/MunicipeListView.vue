<template>
  <div>
    <h2>Municípios</h2>
    <MunicipeList :dataList="municipeList" />
  </div>
</template>
<script>
  import MunicipeList from '../components/MunicipeList.vue'

  export default {
    components: { MunicipeList },

    data() {
      return {
        municipeList: ''
      }
    },

    methods: {
      loadMunicipeList() {
        this.$baseURL.get('municipies').then(response => {
          this.municipeList = response.data
        })
      }
    },

    mounted() { this.loadMunicipeList() }
  }
</script>
<style>
      
</style>