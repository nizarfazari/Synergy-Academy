import { Outlet, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";


export default function LayoutDashboard() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="wrapper">
            <div className="sidebar">
                <div className="square"></div>
                <div className="sidebar-wrapper">
                    <a href="/dashboard" className={`sidebar-content ${currentPath === '/dashboard' ? 'bg-[#FFFFFF4D]' : ''}`}>
                        <FaHome className="text-3xl" />
                        <p className="text-sm">Dashboard</p>
                    </a>
                    <a href="/dashboard/list" className={`sidebar-content ${currentPath === '/dashboard/list' ? 'bg-[#FFFFFF4D]' : ''}`}>
                        <FaHome className="text-3xl" />
                        <p className="text-sm font-light">Cars</p>
                    </a>
                </div>
            </div>
            <nav className="sidebar-nav">

            </nav>
            <div className="content" >
                {currentPath === '/dashboard' ?
                    <>
                        <div className="sidebar-detail">
                            <h1 className="mb-4">DASHBOARD</h1>
                            <div className="content-detail">
                                dashboard
                            </div>
                        </div>
                    </> : <>
                        <div className="sidebar-detail">
                            <h1 className="mb-4">CARS</h1>
                            <div className="content-detail">
                                list cars
                            </div>
                        </div>
                    </>}

                <div style={{ paddingLeft: "20px", paddingRight: '20px', paddingTop: '50px', width: '100%' }}>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}