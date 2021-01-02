import axios_service from '../services/axiosService';


class UserService{

    constructor(){
        this.axios_service = new axios_service();
    }

    login(data){
        console.log('data', data)
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

    addNote(data){
        let url = process.env.REACT_APP_BASE_URL + '/notes/addNotes';
        return this.axios_service.post(url, data);
    }

    getAllNotes(){
        let url = process.env.REACT_APP_BASE_URL +'/notes/getNotesList';
        return this.axios_service.Get(url)
    }

}
export default new UserService();