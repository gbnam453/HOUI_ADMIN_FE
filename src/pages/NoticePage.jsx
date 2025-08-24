import { useState } from "react";
import "./notice.css";

export default function NoticePage() {
    const [currentNotice, setCurrentNotice] = useState("오늘은 비가 많이와서 마감");
    const [input, setInput] = useState("");

    const handlePost = () => {
        const text = input.trim();
        if (!text) return alert("공지 내용을 입력하세요.");
        setCurrentNotice(text);
        setInput("");
        alert("공지가 등록되었습니다.");
    };

    const handleEdit = () => {
        const next = prompt("공지 내용을 수정하세요.", currentNotice);
        if (next == null) return;
        const text = next.trim();
        if (!text) return alert("빈 내용은 저장할 수 없습니다.");
        setCurrentNotice(text);
        alert("공지가 수정되었습니다.");
    };

    const handleDelete = () => {
        if (!currentNotice) return;
        if (confirm("현재 공지를 삭제하시겠습니까?")) {
            setCurrentNotice("");
            alert("공지가 삭제되었습니다.");
        }
    };

    return (
        <div className="notice-wrap">
            {/* 왼쪽: 공지 작성 */}
            <section className="card notice-editor">
                <h2 className="card-title">공지사항</h2>

                <textarea
                    className="notice-textarea gray-box"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="입력할 공지사항을 입력하세요"
                />

                <div className="right-actions">
                    <button className="mint-btn" onClick={handlePost}>공지</button>
                </div>
            </section>

            {/* 오른쪽: 현재 공지사항 */}
            <aside className="card notice-current">
                <h2 className="card-title">현재 공지사항</h2>

                <textarea
                    className="notice-textarea gray-box"
                    value={currentNotice}
                    readOnly
                />

                <div className="row-actions">
                    <button className="mint-btn ghost" onClick={handleEdit}>수정</button>
                    <button className="mint-btn ghost" onClick={handleDelete}>삭제</button>
                </div>
            </aside>
        </div>
    );
}
