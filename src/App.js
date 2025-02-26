'use client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import PartyFinder from './components/PartyFinder'

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                <Header />
                
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/partyfinder" element={<PartyFinder />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}
