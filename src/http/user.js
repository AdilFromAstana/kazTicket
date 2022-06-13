export const check = () => {
    let userName = document.cookie.replace(/(?:(?:^|.*;\s*)userName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    let userPass = document.cookie.replace(/(?:(?:^|.*;\s*)userPass\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return {userName, userPass}
}