import Header from "../shared/Header";
import "./layouts.css";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <Header />
            <main className="page">
                <Outlet />
            </main>
        </>
    );
}
