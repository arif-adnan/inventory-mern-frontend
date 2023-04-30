import axios from "axios";
import {getToken} from "../helper/SessionHelper";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import {BaseURL} from "../helper/config";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";


const AxiosHeader={headers:{"token":getToken()}}

export async function RegistrationRequest(email,firstName,lastName,mobile,password,photo) {
    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL+"/Registration";
        let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password, photo:photo}
        let res = await axios.post(URL,PostBody);
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    ErrorToast("Email Already Exist")
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }
            else {
                    SuccessToast("Registration Success")
                    return true;
                }
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }
    catch (e) {
        store.dispatch(HideLoader());
        ErrorToast("Something went wrong");
        return false;
    }
}