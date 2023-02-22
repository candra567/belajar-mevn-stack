<template>
    <div class="row">
        <div class="col-md-6">
            <form action="" @submit.prevent="$emit('editEmploye',state.id_employe,state)">
                <div class="my-2">
                    <label for="name_employe" class="form-label">Nama employe</label>
                    <input type="text" name="name_employe" id="name_employe" class="form-control form-control-sm" v-model="state.name_employe" >
                </div>
                <div class="my-2">
                    <label for="salary_employe" class="form-label">Salary employe</label>
                    <input type="number" name="salary_employe" id="salary_employe" class="form-control form-control-sm" v-model="state.salary_employe" >
                </div>
                <div class="my-2">
                    <button type="submit" class="btn btn-primary btn-sm">Edit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
    import {ref} from "vue"
      const props=defineProps({
        data:Object
      })  
      const state=ref({
         name_employe:props.data.name_employe,
         salary_employe:props.data.salary_employe,
         id_employe:props.data.id_employe,
      })

      
      
</script>