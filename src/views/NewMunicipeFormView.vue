<template>
  <div>
    <h2>Cadastrar Município</h2>
    <MunicipeForm
      :submit="onSubmit"
      @on-submit="onSubmit"
      :listMunicipeOptions="listMunicipeOptions"
      :municipeOptions="municipeOptions"
      :handleImageChange="handleImageChange"/>
  </div>
</template>
<script>
  import MunicipeForm from '../components/MunicipeForm.vue'

  export default {
    components: { MunicipeForm },

    data() {
      return {
        municipeOptions: '',
        municipe: {
          full_name: '',
          cpf: '',
          cns: '',
          birth_date: '',
          phone_number: '',
          email: '',
          status: '',
          photo: '',
          address_attributes: {
            cep: '',
            public_place: '',
            complement: '',
            city: '',
            uf: '',
            ibge_code: '',
            municipe_id: '',
            neighborhood: ''
          }
        }
      }
    },

    methods: {
      handleImageChange(file) {
      this.municipe.photo = file;
    },

      onSubmit(municipeForm) {
        console.log(municipeForm)
        this.$baseURL.post('/municipies', { municipe: municipeForm })
            .then(response => console.log(response.data, response.status))
      },

      listMunicipeOptions() {
        this.$baseURL.get('/municipies')
            .then(res => this.municipeOptions = res.data)
      }
    },

    mounted() {
      this.listMunicipeOptions()
    }
  }
</script>
<style>

</style>
