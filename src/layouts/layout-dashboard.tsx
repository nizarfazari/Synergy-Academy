import { Outlet } from "react-router-dom";



export default function LayoutDashboard() {


    return (
        <div className="wrapper">
            <div className="sidebar">
                <div className="square"></div>
                <div className="sidebar-wrapper">
                    <div className="sidebar-content">
                    </div>
                    <div className="sidebar-content">
                    </div>
                </div>
            </div>
            <nav className="sidebar-nav">

            </nav>
            <div className="content" >
                <div className="sidebar-detail">
                    <h1>DASHBOARD</h1>
                    <div className="content-detail">
                        dashboard
                    </div>
                </div>
                <div style={{ paddingLeft: "20px", paddingRight: '20px', paddingTop: '50px', width: '100%' }}>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}