// src/pages/Dashboard.jsx
import "./dashboard.css";

export default function Dashboard() {
    // 데모 데이터 (원하면 API 연결해서 교체)
    const rows = [
        { no: 1, name: "안상현", studentId: "20250986", status: "타박상", treated: "처방완료" },
        { no: 2, name: "안상현", studentId: "20250986", status: "타박상", treated: "처방완료" },
        { no: 3, name: "안상현", studentId: "20250986", status: "타박상", treated: "처방완료" },
        { no: 4, name: "안상현", studentId: "20250986", status: "타박상", treated: "처방완료" },
    ];

    const waitings = [
        { id: "20250000", memo: "타박상 및 골절" },
        { id: "20250000", memo: "타박상 및 골절" },
        { id: "20250000", memo: "타박상 및 골절" },
    ];

    return (
        <div className="dash">
            <div className="dash-inner">
                {/* 좌측 : 접수기록 */}
                <section className="left">
                    <h1 className="title">접수기록</h1>

                    {/* 헤더 */}
                    <div className="table-head">
                        <span>번호</span>
                        <span>이름</span>
                        <span>학번</span>
                        <span>상태</span>
                        <span>처방여부</span>
                    </div>

                    {/* 바디 */}
                    <div className="table-body">
                        {rows.map((r) => (
                            <div key={r.no} className="table-row">
                                <span>{r.no}</span>
                                <span>{r.name}</span>
                                <span>{r.studentId}</span>
                                <span>{r.status}</span>
                                <span>{r.treated}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 가운데 세로 구분선 */}
                <div className="v-divider" />

                {/* 우측 : 대기자 카드 */}
                <aside className="right">
                    <div className="waiting-card">
                        <h2 className="waiting-title">대기자</h2>
                        <p className="waiting-sub">현재 대기자는 {waitings.length}명 입니다</p>

                        <div className="waiting-table">
                            <div className="w-head">
                                <span>인적사항</span>
                                <span>내용</span>
                            </div>
                            {waitings.map((w, i) => (
                                <div key={i} className="w-row">
                                    <span>{w.id}</span>
                                    <span>{w.memo}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
