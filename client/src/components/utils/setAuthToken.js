const { default: Axios } = require("axios")

const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization']
    
    }
}