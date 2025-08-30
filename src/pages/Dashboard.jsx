import React, { useMemo, useState } from "react";
import "./dashboard.css";

const mock = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    name: "안상현",
    studentId: "20250986",
    symptom: "타박상",
    createdAt: "2025-07-25T14:25:00",
    status: "등록"
}));

function fmt(iso) {
    const d = new Date(iso);
    const y = d.getFullYear().toString().slice(2);
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return { top: `${y}-${m}-${day}`, bottom: `${hh}:${mm}` };
}

export default function ReceptionPage() {
    const rows = useMemo(() => mock, []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const handleOpenModal = (row) => {
        setSelectedRow(row);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setInputValue("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("저장된 값:", {
            name: selectedRow.name,
            content: inputValue
        });
        handleCloseModal();
    };

    return (
        <div className="page page-reception">
            <h1 className="page-title">접수현황</h1>

            <div className="table-wrap">
                <table className="rec-table">
                    <colgroup>
                        <col style={{ width: "6%" }} />
                        <col style={{ width: "12%" }} />
                        <col style={{ width: "14%" }} />
                        <col style={{ width: "20%" }} />
                        <col style={{ width: "20%" }} />
                        <col style={{ width: "12%" }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>학번</th>
                        <th>증상 내용</th>
                        <th>접수일자</th>
                        <th>처리상태</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((r) => {
                        const d = fmt(r.createdAt);
                        return (
                            <tr key={r.id}>
                                <td>{r.id}</td>
                                <td>{r.name}</td>
                                <td>{r.studentId}</td>
                                <td>{r.symptom}</td>
                                <td>
                                    <div className="date-cell">
                                        <span className="date-top">{d.top}</span>
                                        <span className="date-bottom">{d.bottom}</span>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        className="pill-btn mint"
                                        onClick={() => handleOpenModal(r)}
                                    >
                                        {r.status}
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>

            <footer className="footer">
                Copyright 2025 GATE. All rights reserved.
            </footer>

            {/* ✅ 모달 */}
            {isModalOpen && selectedRow && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>
                                <strong>{selectedRow.name}</strong>님의{" "}
                                <span className="highlight">처방내용</span> 등록
                            </h3>
                            <button className="close-btn" onClick={handleCloseModal}>×</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <textarea
                                    placeholder="처방 내용을 입력해주세요."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </div>
                            <div className="modal-actions">
                                <button type="submit" className="submit-btn">등록</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}


