export const GetToken = () => { return(localStorage.getItem('token'))};
export const SetToken = (str : string) => { localStorage.setItem("token", str);};
