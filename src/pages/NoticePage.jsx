import React, { useEffect, useState } from "react";
import "./notice.css";

export default function NoticePage() {
    // 서버에서 가져온다고 가정한 초기값
    const initial = {
        title: "테스트 공지사항입니다.",
        date: "2025.08.23",        // ← 날짜는 텍스트로만 노출
        body:
            "베타테스트 기간입니다.\n현재 서명기능과 메인화면에서 접수 대기 인원의\n표기 기능은 개발 진행중입니다",
    };

    const [form, setForm] = useState(initial);
    const [isEditing, setIsEditing] = useState(false);
    const [showSavedModal, setShowSavedModal] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("notice_form");
        if (saved) {
            try { setForm(JSON.parse(saved)); } catch {}
        }
    }, []);

    const onChange = (key) => (e) =>
        setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const onEdit = () => setIsEditing(true);

    const onSave = () => {
        // TODO: 실제 저장 API 연동
        localStorage.setItem("notice_form", JSON.stringify(form));
        setIsEditing(false);
        setShowSavedModal(true);
    };

    return (
        <div className="page page-notice">
            <section className="notice-panel">
                {/* 패널 안 제목 */}
                <h1 className="notice-heading">공지사항</h1>

                {/* 제목 입력 */}
                <input
                    className={`n-input center ${isEditing ? "edit" : ""}`}
                    value={form.title}
                    onChange={onChange("title")}
                    placeholder="공지 제목"
                    disabled={!isEditing}
                />

                {/* 날짜 텍스트 */}
                <div className="n-date-text center">{form.date}</div>

                {/* 본문 */}
                <textarea
                    className={`n-textarea center ${isEditing ? "edit" : ""}`}
                    value={form.body}
                    onChange={onChange("body")}
                    placeholder="내용을 입력하세요"
                    disabled={!isEditing}
                />

                {/* 우하단 버튼: 수정 ↔ 저장 */}
                {!isEditing ? (
                    <button className="fab mint" onClick={onEdit} aria-label="수정">
                        {/* 연필 아이콘 */}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                            <path d="M14.06 5.94l3.75 3.75 1.13-1.13a1.5 1.5 0 000-2.12l-1.63-1.63a1.5 1.5 0 00-2.12 0l-1.13 1.13z" fill="currentColor"/>
                        </svg>
                    </button>
                ) : (
                    <button className="fab mint" onClick={onSave} aria-label="저장">
                        {/* 플로피 아이콘 */}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4h12l4 4v12H4V4z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                            <path d="M7 4h8v5H7V4z" fill="currentColor"/>
                            <path d="M7 13h10v7H7z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                        </svg>
                    </button>
                )}
            </section>

            {/* 저장 완료 모달 */}
            {showSavedModal && (
                <div className="modal-backdrop" onClick={() => setShowSavedModal(false)}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <h2>저장 완료</h2>
                        <p>공지사항이 저장되었습니다 ✅</p>
                        <button className="close-btn" onClick={() => setShowSavedModal(false)}>
                            닫기
                        </button>
                    </div>
                </div>
            )}

            <footer className="notice-footer">
                Copyright 2025 GATE. All rights reserved.
            </footer>
        </div>
    );
}
