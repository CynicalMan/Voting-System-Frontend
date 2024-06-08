export const setAuthUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
};

export const getAuthUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null; 
};

export const removeAuthUser = () => {
    localStorage.removeItem("user");
};
