import React from 'react'

const Recommended = () => {
    const mockRecommended = [
        { id: 1, name: 'Recommended 1' },
        { id: 2, name: 'Recommended 2' },
        { id: 3, name: 'Recommended 3' }
    ];

    return (
        <div className="p-4 border w-[18rem] flex flex-col gap-2">
            <h1 className="text-[1.5rem] font-[500]">Recommended Friends</h1>
            <ul className="flex flex-col gap-1 p-2">
                {mockRecommended.map(recommended => (
                    <li className="friend-li flex items-center gap-3 px-4 py-3 max-w-[16rem] rounded-[0.5rem]" key={recommended.id}>
                        <div className='avatar'></div>
                        <span>{recommended.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recommended