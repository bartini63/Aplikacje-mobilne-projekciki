function isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
    if (value == "") {
        setEmailError("")
    }
    else if (isValidEmail(value)) {
        setEmailError("")
    }
    else {
        setEmailError("Błędny e-mail")
    }
}

function validatePassword(value, setPasswordError) {
    if (value.length < 9) {
        setPasswordError("Hasło musi zawierać minimum 8 znaków")
    } else {
        setPasswordError("")
    }
}

const utils = {
    isValidEmail,
    validateEmail,
    validatePassword
};

export default utils;