import axios from "axios"


function getData(value){
axios.get(`http://localhost:4000/v1/api/products?keyword=${value || ""}`)
.then(res => {
    return res.data.products
})
.catch(err => "Server error" + err)
}

export default getData;
