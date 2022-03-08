
export default function LoginPage({ login }: { login: boolean }) {
    return (
        <>
            if(login){
                <>
                    <p>Username</p>
                    <p>Password</p>
                </>
            }
            else{
                <>
                    <p>Username</p>
                    <p>Name</p>
                    <p>Surname</p>
                    <p>Password</p>
                </>
            }
        </>
    );
}