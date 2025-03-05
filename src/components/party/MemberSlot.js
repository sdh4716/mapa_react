'use client'

import React from 'react'

export default function MemberSlot({ position, member, onUpdateMember }) {
    return (
        <div className="p-4 bg-white dark:bg-gray-800 border rounded-lg shadow-md">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">{position}</label>
            <input
                type="text"
                placeholder="레벨/직업/스공 입력"
                value={member?.name || ''}
                onChange={(e) => onUpdateMember(position, { ...member, name: e.target.value })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
            />
        </div>
    )
}