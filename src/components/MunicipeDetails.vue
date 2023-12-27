<template>
  <el-row v-if="data">
    <el-col :span="16" :offset="4">
      <h2>MunicipeDetails</h2>
      <el-row class="back-to-list-button">
        <el-col :span="2">
          <el-button @click="$router.push('/')">
            Voltar para a lista
          </el-button>
        </el-col>
      </el-row>
        <el-row type="flex">
          <el-col>
            <img :src="data.photo" alt="">
          </el-col>
          <el-col>
            <p>{{ data.full_name }}</p>
            <p>{{ data.cpf }}</p>
            <p>{{ data.cns }}</p>
            <p>{{ data.email }}</p>
            <p>{{ data.status }}</p>
            <p>{{ data.phone_number }}</p>
            <p>{{ data.birth_date }}</p>
            <b>Endereço: </b>
            <div v-if="data.address">
              <p>{{ data.address.cep }}</p>
              <p>{{ data.address.public_place }}</p>
              <p>{{ data.address.complement }}</p>
              <p>{{ data.address.city }}</p>
              <p>{{ data.address.uf }}</p>
              <p>{{ data.address.neighborhood }}</p>
              <p>{{ data.address.ibge_code }}</p>
            </div>
            <div v-else>Não tem endereço cadastrado no momento</div>
          </el-col>
        </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ['data']
}
</script>
<style>
  
</style>