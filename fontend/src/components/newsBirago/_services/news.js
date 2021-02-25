import axios from 'axios'
import { linkAPI } from './routeAPI'

const APILink = linkAPI
class newService{
    danhSachDanhMucCon() {
        return axios({
            url: `${APILink}/news`,
            method: `GET`,
        })
    }
}
export default newService