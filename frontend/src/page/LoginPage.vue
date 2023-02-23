<template>
    <div class="container">
        <div class="row justify-content-center align-items-center" style="min-height: 100vh;">
            <div class="col-md-6 col-lg-4 col-11">
                <form action="" @submit.prevent="login">
                	<div class="my-2"><h5 class="text-center">Login</h5></div>
            	<div class="alert alert-sm alert-danger my-2" v-if="showMessage==true">{{message}}</div>
                    <div class="my-2">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" name="username" id="username" class="form-control" v-model="data.username">
                    </div>
                    <div class="my-2">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name="password" id="password" class="form-control" v-model="data.password">
                    </div>
                    <div class="my-3">
                        <button type="submit" class="btn btn-primary w-100 text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
	import axios from "axios";
	import {useRouter} from "vue-router";
	import {ref} from "vue";
	const router=useRouter()
	const data=ref({
		username:"",
		password:""
	})
	const showMessage=ref(false)
	const message=ref(null)

	function login(){
		axios.post("http://localhost:3000/api/login",{
			username:data.value.username,
			password:data.value.password
		}).then(res =>{
			localStorage.setItem("token",res.data.token)
			router.push("/")
			console.log(res)
		}).catch(res => {
			showMessage.value=true;
			message.value=res.response.data.message
		})
	}

</script>