'use client'

import React, { useState } from 'react'
import Slot from './Slot'

export default function FloorEditor() {
    const [slots, setSlots] = useState([
        { id: 1, name: '옥상', status: '구인중', isSplit: false, direction: 'horizontal' },
        { id: 2, name: '좌2', status: '구인중', isSplit: false },
        { id: 3, name: '좌1', status: '구인중', isSplit: false },
        { id: 4, name: '우1', status: '구인중', isSplit: false },
        { id: 5, name: '프리스트', status: '구인중', isSplit: false }
    ])

    const handleSplit = (id, direction) => {
        setSlots((prevSlots) => {
            const slotIndex = prevSlots.findIndex(slot => slot.id === id)
            const newSlot = { ...prevSlots[slotIndex], isSplit: true, direction }

            const newSlots = [...prevSlots]
            newSlots.splice(slotIndex + 1, 0, {
                ...newSlot,
                id: Math.max(...prevSlots.map(s => s.id)) + 1,
                name: `${newSlot.name} (분할)`,
                status: '구인중'
            })

            return newSlots
        })
    }

    const handleMerge = (id) => {
        setSlots((prevSlots) => prevSlots.filter(slot => slot.id !== id))
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            {slots.map(slot => (
                <Slot
                    key={slot.id}
                    slotName={slot.name}
                    status={slot.status}
                    isSplit={slot.isSplit}
                    direction={slot.direction}
                    onSplit={(direction) => handleSplit(slot.id, direction)}
                    onMerge={() => handleMerge(slot.id)}
                />
            ))}
        </div>
    )
}
