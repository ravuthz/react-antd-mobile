import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                <li>
                    <Link to="/dashboard/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard/user">User</Link>
                </li>
                <li>
                    <Link to="/dashboard/other">Other</Link>
                </li>
                <li>
                    <Link to="/dashboard/other1">Other1</Link>
                </li>
                <li>
                    <Link to="/dashboard/other2">Other2</Link>
                </li>
                </ul>
            </nav>
            <hr />
            <Outlet/>
        </>
    );
}

export default DashboardPage;