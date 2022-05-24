<template>

  <section class="formComponent">
    <div class="jumbotron">
      <h1>Formulario</h1>
      <hr>

      <vue-form :state="formState" @submit.prevent="enviar()">
      
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            autocomplete="off"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            v-model="formData.nombre"
          >
          
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Este campo es requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
                El nombre debe tener {{nombreMinLength}} letras minimo.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
                El nombre debe tener {{nombreMaxLength}} letras maximo.
            </div>

          </field-messages>

        </validate>

        <br>

        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad"
            class="form-control"
            v-model.number="formData.edad"
            autocomplete="off"
            required
            :min="edadMin"
            :max="edadMax"
          >

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es requerido.</div>
            <div slot="min" class="alert alert-danger mt-1">La edad minima es {{edadMin}} </div>
            <div slot="max" class="alert alert-danger mt-1">La edad maxima es {{edadMax}} </div>          
          </field-messages>
        </validate>

        <br>

        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            v-model="formData.email"
            class="form-control"
            required
            autocomplete="off"
          >

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es requerido.</div>
            <div slot="email" class="alert alert-danger mt-1">Email no valido.</div>
          </field-messages>

          <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>

        </validate>
      

      
      </vue-form>

      <br>

      <div class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr v-for="(persona,index) in personas" :key="index">
            <td> {{persona.nombre}} </td>
            <td> {{persona.edad}} </td>
            <td> {{persona.email}} </td>
          </tr>
        </table>

      </div>

    </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'formComponent',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 5,
        nombreMaxLength : 15,
        edadMin : 18,
        edadMax : 120,
        personas : []
      }
    },
    methods: {
      enviar(){
        this.personas.push(this.formData)
        this.formData = this.getInicialData()
        this.formState._reset()
      },
      getInicialData(){
        return{
          nombre : '',
          edad : '',
          email : ''
        }
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .form {

  }
</style>
