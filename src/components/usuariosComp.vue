<template>

  <section class="usuarios-comp">
    <h1>Usuarios</h1>
    <div class="jumbotron">
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosXHRcb()">
        Get(XHR)
      </button>
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosFetch()">
        Get(Fetch)
      </button>
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosAxios()">
        Get(Axios)
      </button>

      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <td> {{ usuario.nombre }} </td>
            <td> {{ usuario.email }} </td>
            <td> {{ usuario.telefono }} </td>
          </tr>
        </table>
        <h5 class="alert alert-succes">
          Se encontraron {{ usuarios.length }} usuarios.
        </h5>
      </div>
      <h5 v-else class="alert alert-danger">
        No se encontraron usuarios
      </h5>

    </div>


  </section>

</template>

<script>

  export default  {
    name: 'usuarios-comp',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://628c22f5a3fd714fd02d3e5b.mockapi.io/usuarios',
        usuarios: []

      }
    },
    methods: {
      getUsuariosXHRcb(){
        console.log("Entre");
        
        const xhr = new XMLHttpRequest
        xhr.open('get', "https://628c22f5a3fd714fd02d3e5b.mockapi.io/usuarios")

        xhr.addEventListener('load', () => {
          if(xhr.status == 200){
            let respuesta = JSON.parse(xhr.response)
            this.usuarios = respuesta
          }else{
            console.log('Error XHR cb (status)', xhr.status);
          }
        })

        xhr.addEventListener('error', e => {
          console.log('Error XHR cb (ajax)', e);
        })

        xhr.send()
      },

      async getUsuariosFetch(){
        try{
          let response = await fetch(this.url)
          let respuesta = await response.json()
          this.usuarios = respuesta
        }
        catch(error){
          console.error('Error Fetch', error);
        }
      },
      async getUsuariosAxios(){
        try{
          let { data } = await this.axios(this.url)
          this.usuarios = data
        }
        catch(error){
          console.error('Error Axios', error);
        }
      }


    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .usuarios-comp {

  }
</style>
