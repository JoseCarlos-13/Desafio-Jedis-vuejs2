<template>
  <el-row type="flex">
    <el-col :span="12" :offset="6">
      <el-row class="back-to-list-button">
        <el-col :span="2">
          <el-button @click="$router.push('/')">
            Voltar para a lista
          </el-button>
        </el-col>
      </el-row>

      <el-row type="flex" class="form-card">
        <el-col>
          <el-form
            class="form"
            :model="municipe"
            @submit.prevent="$emit('on-submit', municipe)"
          >
          <el-row :gutter="20">
            <el-col :span="10">
              <el-form-item label="Nome completo:">
                  <el-input v-model="municipe.full_name" />
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="CPF:">
                  <el-input v-model="municipe.cpf" />
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="CNS:">
                <el-input v-model="municipe.cns" />
              </el-form-item>
            </el-col>
          </el-row>

            <el-row type="flex" :gutter="20">
              <el-col :span="10">
                <el-form-item label="Email:">
                  <el-input type="email" v-model="municipe.email" />
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item label="Telefone:">
                  <el-input v-model="municipe.phone_number" />
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item label="Data de Nascimento:">
                  <el-input type="date" v-model="municipe.birth_date" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row type="flex" :gutter="20">
              <el-col :span="8">
                <el-form-item label="Status:">
                  <el-radio v-model="municipe.status" label="active">
                    Ativo
                  </el-radio>
                  <el-radio v-model="municipe.status" label="inactive">
                    Inativo
                  </el-radio>
              </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item label="Foto:">
                  <img-inputer
                    v-model="municipe.photo"
                    theme="light"
                    size="small"
                    @change="handleImageChange"
                  />
                </el-form-item>
              </el-col>
            </el-row>

            <h5 align="left">Endereço:</h5>

            <el-row type="flex" justify="center" :gutter="20">
              <el-col :span="6">
                <el-form-item label="Cep:">
                  <el-input v-model="cep"/>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Lugar púbico:">
                  <el-input
                    v-model="municipe.address_attributes.public_place"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="Complemento:">
                  <el-input
                    v-model="municipe.address_attributes.complement"
                  />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center" :gutter="20">
              <el-col :span="6">
                <el-form-item label="Cidade:">
                  <el-input
                    v-model="municipe.address_attributes.city"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item label="Estado:">
                  <el-input
                    v-model="municipe.address_attributes.uf"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item label="Código do IBGE:">
                  <el-input
                    v-model="municipe.address_attributes.ibge_code"
                  />
                </el-form-item>
              </el-col>  
            </el-row>

            <el-row type="flex" justify="center" :gutter="20">
              <el-col :span="6">
                <el-form-item label="Município:">
                  <el-select
                    v-model="municipe.address_attributes.municipe_id"
                    placeholder="Select">
                    <el-option
                      v-for="municipe in municipeOptions"
                      :key="municipe.id"
                      :label="municipe.full_name"
                      :value="municipe.id">
                    </el-option>
                  </el-select>

                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item label="Bairro:">
                  <el-input
                    v-model="municipe.address_attributes.neighborhood"
                  />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row type="flex" justify="left" class="confirm-and-cancel-buttons">
              <el-form-item >
                <el-button type="primary" @click="submit(municipe)">Create</el-button>
                <el-button>Cancel</el-button>
              </el-form-item>
            </el-row>
           
          </el-form>
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>
<script>
  import ImgInputer from 'vue-img-inputer'
  import 'vue-img-inputer/dist/index.css'
  import cep from 'cep-promise'

  export default {
    props: [
      'data',
      'submit',
      'handleImageChange',
      'listMunicipeOptions',
      'municipeOptions'
    ],

    components: {
      ImgInputer
    },

    data() {
      return {
        dialogVisible: false,
        cep: '',
        municipe: {
          full_name: this.data?.full_name || '',
          cpf: this.data?.cpf || '',
          cns: this.data?.cns || '',
          birth_date: this.data?.birth_date || '',
          phone_number: this.data?.phone_number || '',
          email: this.data?.email || '',
          status: this.data?.status || '',
          photo: this.data?.photo || '',
          address_attributes: {
            cep: this.data?.address_attributes.cep || '',
            city: this.data?.address_attributes.city || '',
            uf: this.data?.address_attributes.state || '',
            ibge_code: this.data?.address_attributes.ibge_code || '',
            municipe_id: this.data?.address_attributes.municipe_id || '',
            public_place: this.data?.address_attributes.street || '',
            complement: this.data?.address_attributes.complement || '',
            neighborhood: this.data?.address_attributes.neighborhood || ''
          },
        }
      }
    },

    watch: {
      cep() {
        this.municipe.address_attributes.cep = this.cep
        if (this.cep.length > 0) {
          setTimeout(() => {
            cep(this.cep).then(res => {
              this.municipe.address_attributes.city = res.city,
              this.municipe.address_attributes.public_place = res.street
              this.municipe.address_attributes.uf = res.state
              this.municipe.address_attributes.neighborhood = res.neighborhood
            }).catch(error => console.log(error))
          }, 3500);
        }
      }
    }
  }
</script>
<style>
  .back-to-list-button {
    margin: 0px 0px 20px 0px
  }

  .form-card {
    background: rgb(233, 233, 209);
    padding: 50px 0px 0px 60px;
    border-radius: 15px;
  }

  /* .form-input {
    width: 350px !important;
  } */

  /* .form-uploader {
    width: 20px !important;
  } */

  .confirm-and-cancel-buttons {
    margin: 20px 0px 0px 0px;
  }
</style>
