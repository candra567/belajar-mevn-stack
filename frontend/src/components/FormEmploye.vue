<template>
    <div class="row">
        <div class="col-md-6">
            <form action="" @submit.prevent="$emit('addEmploye',state.data)">
                <div class="my-2">
                    <label for="name_employe" class="form-label">Nama employe</label>
                    <input type="text" name="name_employe" id="name_employe" class="form-control form-control-sm" v-model="state.data.name_employe">
                </div>
                <div class="my-2">
                    <label for="salary_employe" class="form-label">Salary employe</label>
                    <input type="number" name="salary_employe" id="salary_employe" class="form-control form-control-sm" v-model="state.data.salary_employe">
                </div>
                <div class="my-2">
                    <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
	import {reactive} from "vue";
	const state=reactive({
		data:{
		name_employe:null,
		salary_employe:null}
	})
    
</script>