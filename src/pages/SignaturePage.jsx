import React from "react";
import "./signature.css";

export default function SignaturePage() {
    return (
        <div className="sig-wrap">
            <div className="sig-grid">
                {/* 좌측 목록 */}
                <section className="sig-left">
                    <h2 className="sig-title">서명관리</h2>

                    <div className="sig-head">
                        <div>번호</div>
                        <div>이름</div>
                        <div>학번</div>
                        <div>상태</div>
                        <div>처방여부</div>
                        <div>서명관리</div>
                    </div>

                    <div className="sig-list">
                        {[1,2,3,4].map((n) => (
                            <div className="sig-row" key={n}>
                                <div>{n}</div>
                                <div>안상현</div>
                                <div>20250986</div>
                                <div>타박상</div>
                                <div>처방완료</div>
                                <div className="sig-link">서명보기</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 중앙 세로선 */}
                <div className="sig-vline" />

                {/* 우측 카드 */}
                <aside className="sig-right">
                    <h3 className="sig-card-title">서명 (이름)</h3>
                    <div className="sig-card">
                        <div className="sig-photo">사진</div>
                        <button className="sig-del">삭제</button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
