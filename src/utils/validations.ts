export const checkEmpty = (stringStr: string) => {
    return (stringStr == null || stringStr.trim() === "")
}

export const checkEmailValidate = (email: string) => {
	let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return !reg.test(email.trim());
}

export const passwordValidate = (password: string) => {
	return password.length < 10;
}

export const charactorNonRepeat = (text: string) => {
	let reg = /^.*(.).*\1.*$/;
    return reg.test(text.trim());
}