import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ApplicationPage = () => {
    return (
        <>
            <h1>Application</h1>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                </ul>
            </nav>
            <hr />
            <Outlet/>
        </>
    );
}

export default ApplicationPage;