import axios from "axios"
export default {
    savedFavorites: function (favorites){
        return axios.post("/api/icecream", favorites)
    }, 
    getFlavors: function (){
        return axios.get("/api/flavors")
    }
}