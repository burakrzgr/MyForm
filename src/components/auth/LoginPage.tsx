
export default function LoginPage({ login }: { login: boolean }) {
    return (
        <>
            {login?
                <>
                    <p>Username</p>
                    <p>Password</p>
                </>
            :
                <>
                    <p>Username</p>
                    <p>Name</p>
                    <p>Surname</p>
                    <p>Password</p>
                </>}
        </>
    );
}