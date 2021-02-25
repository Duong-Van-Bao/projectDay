import axios from 'axios'
import { linkAPI } from './routeAPI'

const APILink = linkAPI
class otherService {
    tinhchitiet() {
        return axios({
            url: `${APILink}/other`,
            method: `GET`,
        })
    }
}
export default otherService