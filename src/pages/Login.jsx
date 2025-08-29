import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

// ✅ 이미지 import (경로는 실제 위치에 맞게 조정)
import logo from "../assets/images/logo.png";
// 예) 만약 images가 src/assets가 아니라 public이라면 위 라인은 주석처리하고
// <img src="/logo.png" ...> 처럼 사용하세요.

export default function Login() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!id.trim() || !pw.trim()) return;

        // 임시 인증 플래그 저장
        localStorage.setItem("token", "1");
        // 로그인 후 이동할 페이지
        navigate("/record", { replace: true });
    };

    return (
        <div className="login-wrap">
            <form className="login-card" onSubmit={onSubmit}>
                {/* ✅ import로 가져온 로고 사용 */}
                <img src={logo} alt="HOUI" className="login-logo" />

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
