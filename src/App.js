'use client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './pages/Main'
import PartyFinder from './pages/PartyFinder'
import PartyMaker from './pages/PartyMaker'
import MyInfoReg from './pages/MyInfoReg'
import Sidebar from './components/layout/Sidebar'

export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                <Header toggleSidebar={toggleSidebar} />
                
                <div className="flex flex-grow">
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/partyfinder" element={<PartyFinder />} />
                            <Route path="/partymaker" element={<PartyMaker />} />
                            <Route path="/myInfoReg" element={<MyInfoReg />} />
                        </Routes>
                    </main>

                    <Sidebar />
                </div>

                <Footer />

                {/* 오버레이 스타일의 사이드바 */}
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                
                {/* 오버레이 클릭 시 사이드바 닫기 */}
                {isSidebarOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleSidebar}
                    ></div>
                )}
            </div>
        </Router>
    )
}
