import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NoticePage from "./pages/NoticePage";
import SignaturePage from "./pages/SignaturePage";

const isAuthed = () =>
    !!(localStorage.getItem("auth") || sessionStorage.getItem("auth"));

/** 보호된 레이아웃: 인증됐으면 AppLayout, 아니면 /login */
function ProtectedLayout() {
    return isAuthed() ? <AppLayout /> : <Navigate to="/login" replace />;
}

/** 비로그인 전용: 이미 로그인 상태면 /dashboard 로 보냄 */
function UnAuthedOnly({ children }) {
    return isAuthed() ? <Navigate to="/dashboard" replace /> : children;
}

export default function App() {
    return (
        <Routes>
            {/* 로그인 페이지는 비로그인 상태에서만 접근 */}
            <Route
                path="/login"
                element={
                    <UnAuthedOnly>
                        <Login />
                    </UnAuthedOnly>
                }
            />

            {/* 아래는 모두 보호된 레이아웃 (헤더 포함) */}
            <Route element={<ProtectedLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notice" element={<NoticePage />} />
                <Route path="/signature" element={<SignaturePage />} />
            </Route>

            {/* 진입/와일드카드 처리 */}
            <Route
                path="/"
                element={<Navigate to={isAuthed() ? "/dashboard" : "/login"} replace />}
            />
            <Route
                path="*"
                element={<Navigate to={isAuthed() ? "/dashboard" : "/login"} replace />}
            />
        </Routes>
    );
}
