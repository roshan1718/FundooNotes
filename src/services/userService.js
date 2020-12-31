import axios_service from '../services/axiosService';


class UserService{

    constructor(){
        this.axios_service = new axios_service();
    }

    login(data){
       let url = process.env.REACT_APP_BASE_URL + "/user/login";
       return this.axios_service.post(url, data);
    }

    register(data){
        let url = process.env.REACT_APP_BASE_URL + "/user/userSignUp";
        return this.axios_service.post(url, data);
    }

    forgetPass(data){
        let url = process.env.REACT_APP_BASE_URL + "/user/reset";
        return this.axios_service.post(url, data);
    }

    resetPass(data){
        let url = process.env.REACT_APP_BASE_URL + "/user/reset-password";
        return this.axios_service.post(url, data);
    }

}
export default new UserService();