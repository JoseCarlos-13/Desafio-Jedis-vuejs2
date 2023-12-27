<template>
  <el-row>
    <el-col>
      <MunicipeDetails :data="selectedMunicipe" />
    </el-col>
  </el-row>
</template>
<script>
import MunicipeDetails from '../components/MunicipeDetails.vue'

export default {
  components: { MunicipeDetails },
  
  data() {
    return {
      selectedMunicipe: ''
    }
  },

  methods: {
    loadMunicipe() {
      this.$baseURL.get(`municipies/${this.$route.params.id}`)
          .then(response => this.selectedMunicipe = response.data)
    }
  },

  mounted() {
    this.loadMunicipe()
  }
}
</script>
<style>
  
</style>