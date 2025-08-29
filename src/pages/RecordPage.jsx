import React, { useMemo, useState } from "react";
import "./record.css";

const mock = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: "안상현",
    studentId: "20250986",
    symptom: "타박상",
    prescription: "연고, 붕대, 소독",
    createdAt: "2025-07-25T14:25:00",
    signatureUrl: "", // 실제 이미지가 있으면 경로 넣으면 됨
}));

function fmt(iso) {
    const d = new Date(iso);
    const y = String(d.getFullYear()).slice(2);
    const m = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    const hh = `${d.getHours()}`.padStart(2, "0");
    const mm = `${d.getMinutes()}`.padStart(2, "0");
    return { top: `${y}-${m}-${day}`, bottom: `${hh}:${mm}` };
}

export default function RecordPage() {
    const rows = useMemo(() => mock, []);

    // 상세 모달
    const [detailOpen, setDetailOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    // 서명 모달
    const [signOpen, setSignOpen] = useState(false);

    const openDetail = (row) => {
        setSelected(row);
        setDetailOpen(true);
    };
    const closeDetail = () => {
        setDetailOpen(false);
        setSelected(null);
    };

    const openSign = (e, row) => {
        e.stopPropagation(); // ← 행 클릭 이벤트 막기 (중요)
        setSelected(row);
        setSignOpen(true);
    };
    const closeSign = () => setSignOpen(false);

    return (
        <div className="page page-record">
            <h1 className="page-title">접수기록</h1>

            <div className="table-wrap">
                <table className="rec-table">
                    <colgroup>
                        <col style={{ width: "6%" }} />
                        <col style={{ width: "12%" }} />
                        <col style={{ width: "12%" }} />
                        <col style={{ width: "18%" }} />
                        <col style={{ width: "22%" }} />
                        <col style={{ width: "18%" }} />
                        <col style={{ width: "12%" }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>학번</th>
                        <th>증상 내용</th>
                        <th>처방 내용</th>
                        <th>접수일자</th>
                        <th>서명</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((r) => {
                        const d = fmt(r.createdAt);
                        return (
                            <tr key={r.id} className="clickable-row" onClick={() => openDetail(r)}>
                                <td>{r.id}</td>
                                <td>{r.name}</td>
                                <td>{r.studentId}</td>
                                <td>{r.symptom}</td>
                                <td>{r.prescription}</td>
                                <td>
                                    <div className="date-cell">
                                        <span className="date-top">{d.top}</span>
                                        <span className="date-bottom">{d.bottom}</span>
                                    </div>
                                </td>
                                <td>
                                    <button className="pill-btn mint" onClick={(e) => openSign(e, r)}>
                                        보기
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>

            <footer className="footer">Copyright 2025 GATE. All rights reserved.</footer>

            {/* ───────── 상세 모달 (행 클릭) ───────── */}
            {detailOpen && selected && (
                <>
                    <div className="modal-backdrop" onClick={closeDetail} />
                    <div className="modal mint-border">
                        <div className="modal-header">
                            <h2 className="modal-title">{selected.name}님의 진료 상세 내역</h2>
                            <button className="modal-close" onClick={closeDetail}>×</button>
                        </div>

                        <div className="modal-body">
                            <label className="field">
                                <span className="field-label">증상 내용</span>
                                <textarea className="field-input" rows={4} defaultValue={selected.symptom} />
                            </label>
                            <label className="field">
                                <span className="field-label">처방 내용</span>
                                <textarea className="field-input" rows={4} defaultValue={selected.prescription} />
                            </label>
                        </div>

                        <div className="modal-footer">
                            <button className="ghost-btn" onClick={closeDetail}>닫기</button>
                            <button className="pill-btn mint" onClick={closeDetail}>확인</button>
                        </div>
                    </div>
                </>
            )}

            {/* ───────── 서명 모달 (보기 버튼) ───────── */}
            {signOpen && selected && (
                <>
                    <div className="modal-backdrop" onClick={closeSign} />
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="modal-title">{selected.name}님의 서명보기</h2>
                            <button className="modal-close" onClick={closeSign}>×</button>
                        </div>
                        <div className="modal-body">
                            {selected.signatureUrl ? (
                                <img className="signature-img" src={selected.signatureUrl} alt="서명" />
                            ) : (
                                <div className="signature-placeholder">서명</div>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button className="danger-btn" onClick={() => { alert("삭제"); closeSign(); }}>
                                삭제
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
