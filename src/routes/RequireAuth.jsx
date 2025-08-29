// src/routes/RequireAuth.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
    const isLoggedIn = !!localStorage.getItem("token"); // 로그인 체크

    // 로그인 되어 있으면 children(AppLayout 포함)을 그대로 렌더
    // 아니면 /login 으로 보냄
    return isLoggedIn ? children : <Navigate to="/login" replace />;
}
