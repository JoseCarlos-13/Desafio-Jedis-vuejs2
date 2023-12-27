<template>
  <el-row v-if="dataList">
    <el-col :span="20" :offset="2"  class="div-list">
      <el-row class="register-municipe-button">
        <el-col :span="2">
          <el-button @click="$router.push('/register-municipe')">
            Cadastrar Municipio
          </el-button>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="municipies-list">
          <el-table :data="dataList" border>
            <el-table-column prop="full_name" label="Nome Completo" width="280" />
            <el-table-column prop="cpf" label="CPF" width="120" />
            <el-table-column prop="cns" label="CNS" width="200" />
            <el-table-column prop="email" label="Email" width="280" />
            <el-table-column prop="status" label="Status" width="70" />
            <el-table-column prop="photo" label="Foto" width="125">
              <template slot-scope="scope">
                <img :src="scope.row.photo"/>
              </template>
            </el-table-column>
            <el-table-column label="Operations">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="showMunicipe(scope.row.id)"
                >
                  Show
                </el-button>
                <el-button
                  size="mini"
                  @click="editMunicipe(scope.row.id)"
                >
                  Edit
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ['dataList'],

  methods: {
    showMunicipe(index) {
      this.$router.push({
        name: 'Selected Municipe',
        params: { id: index }
      })
    },

    editMunicipe(index) {
      console.log(index);
    }
  }
}
</script>
<style>
  img {
    width: 100px;
    height: auto;
  }

  .register-municipe-button {
    margin: 0px 0px 20px 0px;
  }
</style>