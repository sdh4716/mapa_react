'use client'

import React, { useState } from 'react'

export default function PartyInfoForm({ onUpdatePartyInfo }) {
    const [huntingGround, setHuntingGround] = useState('')
    const [partyName, setPartyName] = useState('')
    const [maxMembers, setMaxMembers] = useState(6)

    const handleSubmit = (e) => {
        e.preventDefault()
        onUpdatePartyInfo({ huntingGround, partyName, maxMembers })
    }

    return (
        <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg space-y-4">
            <h2 className="text-xl font-bold dark:text-white">파티 정보 입력</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">사냥터 이름</label>
                    <input
                        type="text"
                        value={huntingGround}
                        onChange={(e) => setHuntingGround(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
                        placeholder="사냥터 이름을 입력하세요"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">파티 이름</label>
                    <input
                        type="text"
                        value={partyName}
                        onChange={(e) => setPartyName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
                        placeholder="파티 이름을 입력하세요"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">최대 인원</label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={maxMembers}
                        onChange={(e) => setMaxMembers(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded shadow-md hover:bg-orange-600 transition"
                >
                    파티 정보 저장
                </button>
            </form>
        </div>
    )
}