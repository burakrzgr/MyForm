import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from './components/auth/LoginPage';
import Splash from "./Splash";
import CreateNewForm from "./components/new-form/CreateNewForm";
import FillFormList from "./components/fill-form/FillFormList";
import FillForm from "./components/fill-form/FillForm";
import RegisterPage from "./components/auth/RegisterPage";
import BroadcastList from "./components/broadcast/BroadcastList";
import CompletedList from "./components/completed/CompletedList";
import Testing from "./components/misc/Testing";

function ConfigureRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<Splash></Splash>} />
                    <Route path="NewForm">
                        <Route index element={<CreateNewForm></CreateNewForm>} />
                        <Route path=":search" element={<CreateNewForm></CreateNewForm>} />
                    </Route>
                    <Route path="Broadcast" >
                        <Route index element={<BroadcastList></BroadcastList>}></Route>
                        <Route path=":id" element={<BroadcastList></BroadcastList>}></Route>
                    </Route>
                    <Route path="FillForm" >
                        <Route index element={<FillFormList></FillFormList>}></Route>
                        <Route path=":id" element={<FillForm></FillForm>}></Route>
                    </Route>
                    <Route path="MyForms"  element={<CompletedList ></CompletedList>} />
                    <Route path="Forms" >
                        <Route index element={<p>Pick Form</p>} ></Route>
                        <Route path="All" element={<h3>All Tamamlanmadı.</h3>} />
                        <Route path="Waiting" element={<h3>Waiting Tamamlanmadı.</h3>} />
                        <Route path="Sent" element={<h3>Sent Tamamlanmadı.</h3>} />
                        <Route path="Archived" element={<h3>Archived Tamamlanmadı.</h3>} />
                        <Route path=":regionId" element={<CreateNewForm />} />
                    </Route>
                    <Route path="Testing"  element={<Testing show={true} closeEvent={()=> {}} ></Testing>} />
                    <Route path="Login"  element={<LoginPage ></LoginPage>} />
                    <Route path="Register"  element={<RegisterPage ></RegisterPage>} />
                </Route> 
            </Routes>
        </BrowserRouter>
    );
}

export default ConfigureRouter;