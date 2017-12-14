/**
 * 深度copy
 * @param obj
 */
export const deepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * DES加密
 * @param message
 * @param key
 * @returns {*}
 */
export const encryptByDES = (message, key) => {
    const CryptoJS = require("crypto-js");
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
}


/**
 * 设置cookie值
 * @param name
 * @param value
 * @param time
 */
export const setCookie = (name, value, time) => {
    let days = time || 7; // 默认保存7天
    let exp = new Date();
    const PATH = location.pathname.split('/')[1];
    let _path = (PATH.length == 0 || PATH.indexOf('.') != -1) ? '/' : PATH;

    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${escape(value)};path=${_path};expires=${exp.toGMTString()}`;
}

/**
 * 获取cookie值
 * @param name
 * @returns {null}
 */
export const getCookie = (name) => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")

    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

/**
 * 时间戳
 * @returns {number}
 */
export const getTimestamp = () => {
    return Date.parse(new Date());
}

/**
 * 当前微秒数
 * @returns {number}
 */
export const getMilliseconds = () => {
    return new Date().getMilliseconds();
}

/* SessionStorage相关操作 */
export const setSessionStorage = (key, value) => {
    sessionStorage.setItem(key, value);
}

export const getSessionStorage = (key) => {
    return sessionStorage.getItem(key);
}

export const removeSessionStorage = (key) => {
    sessionStorage.removeItem(key);
}

export const clearSessionStorage = () => {
    sessionStorage.clear();
}