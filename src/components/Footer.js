// src/components/Footer.js
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold">MaPa.gg 메이플랜드 파티구인 시스템</h2>
                    <p className="text-sm text-gray-400">© 2025 darong. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaFacebook size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
