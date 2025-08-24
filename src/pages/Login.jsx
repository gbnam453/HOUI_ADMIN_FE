import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Login() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!id.trim() || !pw.trim()) return;

        // (임시) 인증 플래그 저장
        localStorage.setItem("auth", "1");
        navigate("/dashboard", { replace: true });
    };

    return (
        <div className="login-wrap">
            <form className="login-card" onSubmit={onSubmit}>
                <img src="/src/assets/images/logo.png" alt="" className="login-logo" />
                <h1 className="login-title">HOUI</h1>

                <input
                    className="login-input"
                    placeholder="아이디"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    className="login-input"
                    placeholder="비밀번호"
                    type="password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />

                <button className="login-btn" type="submit">
                    로그인
                </button>
            </form>
        </div>
    );
}
