import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3',
        headers:{
            Accept: 'application/json'
        }, 
        params:{
            api_key:"8f15db06b470dedd0f90b757d0dc4d22"
        }
    }
)