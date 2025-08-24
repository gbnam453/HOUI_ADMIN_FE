import React from "react";
import "./dashboard.css";

export default function Dashboard() {
    // 표 4개 (원하는 데이터로 교체 가능)
    const rows = [
        { no: 1, name: "안상현", id: "20250986", status: "타박상", treated: "처방완료" },
        { no: 2, name: "안상현", id: "20250986", status: "타박상", treated: "처방완료" },
        { no: 3, name: "안상현", id: "20250986", status: "타박상", treated: "처방완료" },
        { no: 4, name: "안상현", id: "20250986", status: "타박상", treated: "처방완료" },
    ];

    return (
        <div className="dashboard">
            <div className="dashboard__grid">
                {/* 좌측 */}
                <section className="dashboard__left">
                    <h2 className="dashboard__title">접수기록</h2>

                    <div className="db-list">
                        <div className="db-list__head">
                            <div>번호</div>
                            <div>이름</div>
                            <div>학번</div>
                            <div>상태</div>
                            <div>처방여부</div>
                        </div>

                        <div className="db-list__body">
                            {rows.map((r, idx) => (
                                <div
                                    key={r.no}
                                    className={`db-row ${idx % 2 === 0 ? "db-row--odd" : "db-row--even"}`}
                                >
                                    <div>{r.no}</div>
                                    <div>{r.name}</div>
                                    <div>{r.id}</div>
                                    <div>{r.status}</div>
                                    <div>{r.treated}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 가운데 세로선 (명시적 엘리먼트) */}
                <div className="dashboard__divider" />

                {/* 우측 */}
                <aside className="dashboard__right">
                    <div className="wait-card">
                        <div className="wait-card__title">대기자</div>
                        <div className="wait-card__sub">현재 대기자는 3명 입니다</div>

                        <div className="wait-table">
                            <div className="wait-table__head">
                                <div>인적사항</div>
                                <div>내용</div>
                            </div>
                            <div className="wait-table__row">
                                <div>20250000</div>
                                <div>타박상 및 골절</div>
                            </div>
                            <div className="wait-table__row">
                                <div>20250000</div>
                                <div>타박상 및 골절</div>
                            </div>
                            <div className="wait-table__row">
                                <div>20250000</div>
                                <div>타박상 및 골절</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
