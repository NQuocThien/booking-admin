export const setLocalStorage = (key: string, value: string | object | []) => {
    if (typeof value === 'string') {
        window.localStorage.setItem(key, value)
    }
    else {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
}

export const getLocalStorage = (key: string) => {
    try {
        const storedValue = localStorage.getItem(key);
        // console.log('get item ' + key + ', ' + storedValue)
        return storedValue
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error('Lỗi khi truy xuất từ localStorage:', error);
        return null;
    }
}