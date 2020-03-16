import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/bugs';

function getAllBugs(){
    return axios
        .get(serviceEndPoint)
        .then(response => response.data);
}

function save(bugData){
    if (bugData.id === 0){
        return axios
            .post(serviceEndPoint, bugData)
            .then(response => response.data);
    } else {
        return axios
            .put(`${serviceEndPoint}/${bugData.id}`, bugData)
            .then(response => response.data);
    }
}

function remove(bug){
    return axios
        .delete(`${serviceEndPoint}/${bug.id}`)
        .then(response => response.data);
}

export default { getAllBugs, save, remove };