import axios from 'axios'
const key = process.env.REACT_APP_DEVELOPER_KEY

export const getQueryResult = async (query) => {
    try {
        const req = await axios.get(`https://content.guardianapis.com/artanddesign?api-key=${key}`)
       return req 
    } catch (error) {
        return error
    }

}