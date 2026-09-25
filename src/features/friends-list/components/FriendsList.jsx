import React from 'react'

const FriendsList = () => {
  const mockFriends = [
    { id: 1, name: 'Friend 1' },
    { id: 2, name: 'Friend 2' },
    { id: 3, name: 'Friend 3' }
  ];

  return (
    <div className="flex flex-col gap-2 p-4 border w-[18rem]">
      <h1 className="text-[1.5rem] font-[500]">My Friends</h1>
      <ul className="flex flex-col gap-1 p-2">
        {mockFriends.map(friend => (
          <li className="friend-li flex items-center gap-3 px-4 py-3 max-w-[16rem] rounded-[0.5rem]" key={friend.id}>
            <div className='avatar'></div>
            <span className="text-lg">{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FriendsList