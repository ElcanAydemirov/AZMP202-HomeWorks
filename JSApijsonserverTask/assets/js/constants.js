const BASE_URL = "http://localhost:3000/"

export async function getData(endPoint) {
    try {
        const res = await axios.get(`${BASE_URL}${endPoint}`);
        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getDataById(endPoint, id) {
    try {
        const res = await axios.get(`${BASE_URL}${endPoint}/${id}`);
        return res.data;
    } catch (error) {
        console.error(rror);
        throw error;
    }
}

export async function postData(endPoint, data) {
    try {
        const res = await axios.post(`${BASE_URL}${endPoint}`, data);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function putData(endPoint, data) {
    try {
        const res = await axios.put(`${BASE_URL}${endPoint}`, data);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function deleteData(endPoint, id) {
    try {
        const res = await axios.delete(`${BASE_URL}${endPoint}/${id}`);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
