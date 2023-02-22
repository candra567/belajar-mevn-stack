<template>
                <table class="table table-striped">
                <thead>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Salary</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in data" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.name_employe}}</td>
                        <td>{{item.salary_employe}}</td>
                        <td class="d-flex justify-content-evenly">
                        	<button class="btn btn-sm btn-danger" @click="$emit('deleteEmploye',item.id_employe)">
                        		H
                        	</button>
                        	<button class="btn btn-sm btn-warning" @click="$emit('showEdit',item.id_employe)">
                        		E
                        	</button>
                        	
                        </td>
                    </tr>
                </tbody>
            </table>
          
</template>
<script setup>
import { reactive} from "vue";
const props=defineProps({
    data:Array
})

</script>