<template>
    <container-page title="Data Employe">
        <div class="my-2 d-flex">
            <button class="btn btn-sm btn-primary" @click="state.activeFormAdd=!state.activeFormAdd">Tambah data</button>
            <router-link  to="logout" class="btn btn-sm btn-danger ml-auto">Logout</router-link>
        </div>
        <div class="my-2" v-if="state.activeFormAdd">
            <FormEmploye @add-employe="addEmploye" />
        </div>
        <div class="my-2" v-if="state.activeFormEdit">
            <FormEditEmploye :data="state.employe" @edit-employe="editEmploye" />
        </div>
        <div class="my-2" v-if="state.showAlert==true">
            <AlertCompo :type="state.alertType" :message="state.alertMessage" />
        </div>
        <div class="my-2">
            <TableEmploye :data="state.employes" @show-edit="showEdit" @delete-employe="deleteEmploye" />
        </div>
    </container-page>
</template>
<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
import ContainerPage from "../components/ContainerPage.vue";
import TableEmploye from "../components/TableEmploye.vue";
import FormEmploye from "../components/FormEmploye.vue";
import FormEditEmploye from "../components/FormEditEmploye.vue";
import AlertCompo from "../components/AlertCompo.vue";

const state = reactive({
    activeFormAdd: false,
    activeFormEdit: false,
    employes: [],
    employe: {},
    showAlert: false,
    alertType: "primary",
    alertMessage: ""
})

const baseUrl = "http://localhost:3000/api/employe/";
//get employe
onMounted(() => {
    getEmployes()
})
const getEmployes = () => {
    axios.get(baseUrl, {
        headers: {
            "authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(res => state.employes = res.data.data)
}
const addEmploye = (data) => {
    axios.post(baseUrl,data,{
        headers:{
            "authorization":"Bearer " +localStorage.getItem("token")
        }
    }).then((res) => {
        getEmployes();
        state.activeFormAdd = false;
        state.showAlert = true;
        state.alertMessage = res.data.message;
        setTimeout(() => state.showAlert = false, 2000)
    }).catch(e => {
        state.showAlert = true;
        state.alertMessage = res.toString();
        state.alertType = "danger";
        setTimeout(() => state.showAlert = false, 2000)

    })
}

const showEdit = (id) => {
    axios.get(baseUrl + id,{
        headers: {
            "authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(res => {
        state.employe = res.data.data
        state.activeFormEdit = true;
    })
}
const editEmploye = (id, states) => {
    const data = {
        name_employe: states.name_employe,
        salary_employe: states.salary_employe
    }
    axios.put(baseUrl + id, data,{
        headers: {
            "authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then((res) => {
        state.activeFormEdit = false;
        getEmployes()
        state.showAlert = true;
        state.alertMessage = res.data.message;
        setTimeout(() => state.showAlert = false, 2000)
    }).catch(e => {
        state.showAlert = false;
        state.alertType = "danger"
        state.alertMessage = res.data.message;
        setTimeout(() => state.showAlert = false, 2000)

    })
}
const deleteEmploye = (id) => {
    axios.delete(baseUrl + id,{
        headers: {
            "authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(res => {
        getEmployes();
        state.showAlert = true;
        state.alertMessage = res.data.message;
        setTimeout(() => state.showAlert = false, 2000)
    }).catch(e => {
        state.showAlert = false;
        state.alertType = "danger"
        state.alertMessage = res.data.message;
        setTimeout(() => state.showAlert = false, 2000)


    })
}
</script>