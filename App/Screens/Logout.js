
import { authActions } from "../Store/Index";
import { useDispatch } from "react-redux";
const Logout = ({navigation}) =>{
    const dispatch = useDispatch();
    dispatch(authActions.logout());
    navigation.navigate('SignIn');
    return(
        <></>
    )
}

export default Logout;