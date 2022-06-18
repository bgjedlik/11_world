import Axios from "axios";

Axios.defaults.baseURL = 'http://localhost:3000';

export default {
    getAllCountry(){
        return Axios.get('/country')
            .then(resp => {
                return resp.data
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    getStateByCountry(countryId){
        return Axios.get(`/states?country_id=${countryId}`)
            .then(resp => {
                return resp.data
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    getCityByState(stateId){
        return Axios.get(`/cities?state_id=${stateId}`)
            .then(resp => {
                return resp.data
            })
            .catch(err => {
                return Promise.reject(err)
            })
    }
}
