import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header.jsx";   // ✅ 헤더 불러오기
import "./layout.css";

export default function AppLayout() {
    return (
        <div className="app-layout">
            {/* 상단 네비바 */}
            <Header />

            {/* 본문 */}
            <main className="app-main">
                <Outlet />
            </main>
        </div>
    );
}
