
export const check_auth_error = (error_status, props) => {
    if (error_status === 401) {
        localStorage.removeItem("auth_token");
        props.history.push({ pathname: "/login" });
    }
}