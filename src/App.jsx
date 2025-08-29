import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./layouts/AppLayout.jsx";
import "./layouts/layout.css";
import RequireAuth from "./routes/RequireAuth.jsx";

import Login from "./pages/Login.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import NoticePage from "./pages/NoticePage.jsx";
import SignaturePage from "./pages/SignaturePage.jsx";
import RecordPage from "./pages/RecordPage.jsx";

export default function App() {
    return (
        <Routes>
            {/* 기본은 로그인으로 */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />

            {/* 로그인 필요한 영역 */}
            <Route
                element={
                    <RequireAuth>
                        <AppLayout />
                    </RequireAuth>
                }
            >
                <Route path="/info" element={<InfoPage />} />
                <Route path="/record" element={<RecordPage />} /> {/* ✅ 접수기록 */}
                <Route path="/notice" element={<NoticePage />} />
                <Route path="/signature" element={<SignaturePage />} />
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}
