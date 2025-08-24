import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("auth");
        sessionStorage.removeItem("auth");
        navigate("/login", { replace: true });
    };

    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="brand" aria-label="HOUI logo">HOUI</div>

                <nav className="nav">
                    <NavLink to="/dashboard" end className="nav-link">홈</NavLink>
                    <NavLink to="/notice" className="nav-link">공지</NavLink>
                    <NavLink to="/signature" className="nav-link">서명관리</NavLink>
                </nav>

                <button className="logout-btn" type="button" onClick={handleLogout}>
                    로그아웃
                </button>
            </div>
        </header>
    );
}
