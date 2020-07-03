import axios from "axios"
export default {
    savedFavorites: function (favorites){
        return axios.post("/api/icecream", favorites)
    }, 
    getFlavors: function (){
        return axios.get("/api/flavors")
    },
    getbestIceCream:function(){
        return axios.get("/api/bestIceCream")
    },
    updatebestIceCream: function(id){
        return axios.put("/api/icecream/"+ id)
    }
}