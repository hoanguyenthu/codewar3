import AsyncStorage from '@react-native-community/async-storage';

let token = 'token';

const setData = async (key: string, value: any) => {
    try {
        if (key && value) {
            await AsyncStorage.setItem(key, value)
        } else {
            AsyncStorage.removeItem(key)
        }
    } catch (error) {
        console.log('error', error)
    }
}

const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log('error', error)
    }
}

const setToken = (newToken: string) => {
    setData(token, newToken ? newToken : '')
}

const getToken = () => getData(token)

export { setToken, getToken }