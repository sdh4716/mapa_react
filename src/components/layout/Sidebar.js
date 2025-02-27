// src/components/Sidebar.js
import React, { useState } from 'react'
import { MagnifyingGlassIcon, Cog6ToothIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'

export default function Sidebar({ isOpen, toggleSidebar }) {
    const [activeTab, setActiveTab] = useState('friends')

    const friends = [
        { id: 1, name: '0000000꿀', world: 'Mapleland (리프레)', status: '접속 중', avatar: '/avatars/avatar1.png', online: true },
        { id: 2, name: '0000000칼라딘', world: 'Mapleland (리프레)', status: '접속 중', avatar: '/avatars/avatar2.png', online: true },
        { id: 3, name: '000000차니아빠', world: 'Mapleland (빅토리아)', status: '접속 중', avatar: '/avatars/avatar3.png', online: true },
        { id: 4, name: '88888_천사삼십', world: 'Mapleland (엘나스)', status: '접속 중', avatar: '/avatars/avatar4.png', online: true },
        { id: 5, name: 'yunz', world: 'Mapleland (리프레)', status: '접속 중', avatar: '/avatars/avatar5.png', online: true },
        { id: 6, name: '구구클', world: 'Mapleland (리프레)', status: '접속 중', avatar: '/avatars/avatar6.png', online: true },
    ]

    return (
        <aside className={`fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-800 shadow-md z-50 transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex space-x-4">
                    <button 
                        className={`text-lg font-semibold ${activeTab === 'friends' ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('friends')}
                    >
                        친구
                    </button>
                    <button 
                        className={`text-lg font-semibold ${activeTab === 'chat' ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('chat')}
                    >
                        대화
                    </button>
                    <span className="text-sm bg-orange-500 text-white rounded-full px-2 py-0.5">1</span>
                </div>
                
                <div className="flex space-x-3">
                    <button>
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 dark:text-white" />
                    </button>
                    <button>
                        <Cog6ToothIcon className="h-6 w-6 text-gray-500 dark:text-white" />
                    </button>
                </div>
            </div>

            <div className="p-4 overflow-y-auto h-full">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">접속중 21 / 69명</h3>
                <div className="space-y-4">
                    {friends.map((friend) => (
                        <div key={friend.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                            <div className="relative">
                                <img 
                                    src={friend.avatar || '/avatars/default.png'} 
                                    alt={friend.name} 
                                    className="h-10 w-10 rounded-full object-cover border"
                                />
                                {friend.online && (
                                    <span className="absolute bottom-0 right-0 h-3 w-3 bg-blue-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{friend.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{friend.world}</span>
                                <span className="text-xs text-blue-500">{friend.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}
