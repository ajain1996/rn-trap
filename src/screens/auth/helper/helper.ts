import Toast from 'react-native-simple-toast';
import Auth from '../../../constants/Auth';
import { setUser } from '../../../redux/reducer/user';

export const handleLogin = (
    email: string,
    password: string,
    dispatch: any,
    setLoading: Function,
    navigation: any,
) => {
    // navigation.navigate("VerifyProduct")
    if (!email && !password) {
        Toast.show("Please enter all fields", 1000)
        return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": "user1@gmail.com",
        "password": "password"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    setLoading(true)
    fetch("https://trapapp.vercel.app/api/user/login", requestOptions)
        .then(response => response.json())
        .then(async (result: any) => {
            console.log('\n\n\n user/loginuser/loginuser/loginuser/login: ', result?.message);
            setLoading(false);
            if (result?.statusCode === 404) {
                Toast.show(result?.message, 1000);
            } else if (result?.data) {
                await Auth.setLocalStorageData('token', result?.data?.token)
                    .then(async () => {
                        await Auth.setLocalStorageData('account', result?.data?.user)
                            .then(() => {
                                Toast.show('User Logged In Successfully!', 1000);
                                dispatch(setUser(result?.data?.user));
                                navigation.navigate('AppStack');
                            }).catch((e) => {
                                Toast.show("Oops! Something went wrong", 1000)
                            });
                    }).catch((e) => {
                        Toast.show("Oops! Something went wrong", 1000)
                    });
            }
        })
        .catch(error => {
            console.log('error', error)
            setLoading(false)
        });
}

export const handleRegister = (
    name: string,
    email: string,
    password: string,
    dispatch: any,
    setLoading: Function,
    navigation: any,
) => {
    if (!name && !email && !password) {
        Toast.show("Please enter all fields", 1000)
        return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": name,
        "email": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    setLoading(true)
    fetch("https://trapapp.vercel.app/api/user/register", requestOptions)
        .then(response => response.json())
        .then(async (result: any) => {
            console.log('\n\n\n user/register/register/register/register: ', result?.message);
            setLoading(false);
            if (result?.statusCode === 400) {
                Toast.show(result?.message, 1000);
            } else if (result?.statusCode === 200) {
                await Auth.setLocalStorageData('token', result?.data?.token)
                    .then(async () => {
                        await Auth.setLocalStorageData('account', result?.data?.user)
                            .then(() => {
                                Toast.show('User Registered Successfully!', 1000);
                                dispatch(setUser(result?.data?.user));
                                navigation.navigate('AppStack');
                            }).catch((e) => {
                                Toast.show("Oops! Something went wrong", 1000)
                            });
                    }).catch((e) => {
                        Toast.show("Oops! Something went wrong", 1000)
                    });
            }
        })
        .catch(error => {
            console.log('error', error)
            setLoading(false)
        });
}