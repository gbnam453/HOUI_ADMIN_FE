import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
    };

    // v6/7 NavLink 활성화 클래스
    const cx = ({ isActive }) => `lnk ${isActive ? "active" : ""}`;

    return (
        <header className="houi-hd">
            <div className="houi-hd-inner">
                {/* 좌측 로고 */}
                <button className="brand" onClick={() => navigate("/record")} aria-label="홈으로">
                    HOUI
                </button>

                {/* 중앙 메뉴 */}
                <nav className="gnb">
                    <NavLink to="/record" className={cx}>
                        홈
                    </NavLink>
                    <NavLink to="/info" className={cx}>
                        접수현황
                    </NavLink>
                    <NavLink to="/record" className={cx}>
                        접수기록
                    </NavLink>
                    <NavLink to="/notice" className={cx}>
                        공지
                    </NavLink>
                </nav>

                {/* 우측 로그아웃 */}
                <button className="logout" onClick={onLogout}>
                    로그아웃
                </button>
            </div>

            {/* 하단 라인 */}
            <div className="houi-hd-sep" />
        </header>
    );
}
