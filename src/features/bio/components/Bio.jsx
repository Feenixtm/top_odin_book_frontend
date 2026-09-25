import React from 'react'
import { useState, useEffect } from 'react'

const Bio = () => {
  const [bio, setBio] = useState('')
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    setDisplayName("Display Name");
    setUsername("Username");
    setBio("PLACEHOLDER BIO");
  }, [])

  return (
    <div className="flex flex-col gap-4 p-8 bg-blue-300 w-full max-w-[48rem]" style={{ backgroundImage: "" }}>

      <div className="flex gap-4 items-center">
        <img className="profile-avatar" src="" alt="Avatar" />

        <div className="flex flex-col">
          <input className="text-[2rem] font-500" value={displayName} onChange={(e) => setDisplayName(e.target.value)}></input>
          <p className="text-[1rem]">@{ username }</p>
        </div>
        
      </div>
      
      <p>Bio:</p>
      <textarea className="border p-2" value={bio} onChange={(e) => setBio(e.target.value)} rows={8}/>
      <button className="border w-fit px-2 py-1">Save</button>

    </div>
  )
}

export default Bio