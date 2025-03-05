'use client'

import React, { useState } from 'react'
import FloorEditor from '../components/party/FloorEditor'
import MemberSlot from '../components/party/MemberSlot'
import MergeControl from '../components/party/MergeControl'
import PartyInfoForm from '../components/party/PartyInfoForm'

export default function PartyMaker() {
    return (
        <div className="flex flex-col items-center py-10 bg-gray-50 min-h-screen">
            <div className="w-full max-w-7xl bg-white p-6 shadow-lg rounded-lg flex gap-6">
                <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
                    {/* 왼쪽 파티 정보 입력 영역 */}
                    <h2 className="text-xl font-bold mb-4">파티 정보 입력</h2>
                    <p>사냥터: 루디브리엄 시계탑</p>
                    <p>모집 인원: 6명</p>
                </div>
                <div className="w-2/3 bg-gray-50 p-4 rounded-lg shadow-md">
                    {/* 오른쪽 파티 슬롯 편집기 */}
                    <FloorEditor />
                </div>
            </div>
        </div>
    )
}
