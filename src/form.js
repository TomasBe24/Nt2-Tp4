import Vue from 'vue'
import vueForm from 'vue-form'


var options = {
    validators:{
        'entre' : function(edad, min,max){
            return edad >= min || edad <= max;
        }
    }

}

Vue.use(vueForm,options)