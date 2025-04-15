import { Link } from "react-router-dom";


const User = () => {

    return (
        <>
            <div>
                <h1>User Page</h1>
                <Link to="/dashboard">Go to dashboard Page</Link>
                <Link to="/admin">Go to Login</Link>
            </div>
        </>
    )
}

export default User;