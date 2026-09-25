import React from 'react'
import { useState, useEffect } from 'react'

const DirectMessages = () => {
  const [currUser, setCurrUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const mockMessages = [
    { id: 1, sender: 'User 1', content: 'Hello there!', createdAt: '2024-06-01T18:00:00.670Z' },
    { id: 2, sender: 'User 2', content: 'Hey! How are you?', createdAt: '2024-06-02T18:01:00.670Z'},
    { id: 3, sender: 'User 3', content: 'Just checking in.', createdAt: '2024-06-03T18:02:00.670Z' }
  ];

  const handleSend = (e) => {
    e.preventDefault();

    if (!newMessage.trim()) {
      console.log("New message is empty");
      return;
    }
    const fullDateSentAt = new Date().toISOString();
    // const dateSentAt = fullDateSentAt.split("T")[0];
    // const timeSentAt = fullDateSentAt.split("T")[1].slice(0, 8);

    // console.log(fullDateSentAt);
    // console.log(dateSentAt, timeSentAt);

    const newMessageObj = {
      id: messages.length + 1,
      sender: currUser,
      content: newMessage,
      createdAt: fullDateSentAt,
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  }

  useEffect(() => {
    setCurrUser('User 1');
    setMessages(mockMessages);
  }, [])

  return (
    <div>
      <h1>Direct Messages</h1>

      <div className="flex flex-col gap-2 w-[48rem]">
        <div className="flex flex-col gap-2 border p-4">
          <div className="flex flex-col gap-2">
            {messages.map(message => (
              <div 
                key={message.id} 
                className="flex flex-col border p-4 rounded-[0.25rem] w-fit min-w-[13rem]" 
                style={{ alignSelf: message.sender === currUser ? 'flex-end' : 'flex-start' }}
              >
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <span className="text-[0.875rem]">{message.sender} </span>
                    <span className="text-[0.875rem]">{message.createdAt.split("T")[0]}</span>
                  </div>
                  <span className="text-[0.875rem]">{message.createdAt.split("T")[1].slice(0, 5)}</span>
                </div>
                <p>{message.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 items-center">

          <input 
            type="text" 
            placeholder="Type a message..." 
            className="border p-2 rounded-[0.25rem] w-full" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />

          <button className="send-message-btn p-2 rounded-[0.25rem] border" type="button" onClick={(e) => handleSend(e)}>Send</button>
        </div>
      </div>

    </div>
  )
}

export default DirectMessages