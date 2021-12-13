export const cName = `financepeer`;

export const login = (username, password) => {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cName}=username=${username}&password=${password};${expires};path=/`;
}

export const isLogin = () => {
    const cookies = document.cookie.split(cName)[1];
    return !!cookies;
}

export const logout = () => {
    const d = new Date();
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cName}=;${expires};path=/`;
}
