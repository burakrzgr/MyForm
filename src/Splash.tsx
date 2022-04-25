import logo from "./logo.svg";
import { GetToken } from "./database/Token";
import { Button } from "react-bootstrap";
import { GithubIcon, InstagramIcon, LinkedInIcon, ReactIcon } from "./FontAwesome";
import SidebarCollapsible from "./components/misc/SideBarCollapsible";

const findTimeDiff = (dateTime : Date) => {
    if(!dateTime) return "";
    return Math.floor((new Date(dateTime).getTime() - new Date().getTime()) / 3600000);
}
function AboutMe({Component,text,link}:{Component:any,text:string,link:string}){
    return( <div>
        <Button
            variant="dark"
            className="mb-2 ps-3 text-start"
            style={{width:"13rem"}}
            href={link}
            target="_blank"
            rel="noopener noreferrer" >
            <Component mystyle={{ paddingRight: "1rem" }}></Component>
            <u className="App-link">
                {text}
            </u>
        </Button>
    </div>);
}
const token = GetToken();
export default function Splash() {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                This project developed with </p>
            <code>React TypeScript & Bootstrapt</code>
            <p> by Burak Rüzgar.</p>
                <AboutMe Component={ReactIcon} link="https://reactjs.org" text="Learn React"></AboutMe>
                <AboutMe Component={GithubIcon} link="https://github.com/burakrzgr" text="About Me"></AboutMe>
                <AboutMe Component={InstagramIcon} link="https://www.instagram.com/burak.rzgr/" text="More About Me"></AboutMe>
                <AboutMe Component={LinkedInIcon} link="https://www.linkedin.com/in/burak-r%C3%BCzgar-0aa358106" text="Me As Professional"></AboutMe>
            <hr></hr>
            <div className="p-2">Welcome Back {token?.userName ?? ""}</div>
            <div className="p-2">{new Date() < new Date(token.tokenExpiration) ? <>This token will expire in {findTimeDiff(token?.tokenExpiration)} hours.</>:<>This token is expired.</>}</div>
            <div className="p-2">Your role is {token?.roles??"anonymous"}.</div>
            <div className="p-2">
                <Button variant="outline-primary">Primary outline</Button>
            </div>
            <div className="p-2">
                <Button variant="primary">Primary Main</Button>
            </div>
            <div className="p-2">
                <Button variant="outline-system">System outline</Button>
            </div>
            <div className="p-2">
                <Button variant="system">System Main</Button>
            </div>
 
        </>
    );

}