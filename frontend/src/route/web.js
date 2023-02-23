import {createRouter,createWebHistory} from "vue-router";
import axios from "axios"
import HomePage from "../page/HomePage.vue";
import LoginPage from "../page/LoginPage.vue";

const routes=[
   {
   	path:"/",
   	component:HomePage
   },
   {
   	path:"/login",
   	component:LoginPage
   },
   
]

const router=createRouter({
	history:createWebHistory(),
	routes
})
router.beforeEach(({path},from)=>{
    if(path=="/"){
       axios.get("http://localhost:3000/api/verify",{
       	headers:{
       		"authorization":"Bearer "+localStorage.getItem("token")
       	}
       }).then(res =>{
       	  
       }).catch(res =>{
       	  router.push("/login")
       })
    }
    else if(path=="/logout"){
       localStorage.clear()
       router.push("/login")
    }
})
export default router;