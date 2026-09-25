import React from 'react'

const Feed = () => {
    const mockFeed = [
        { id: 1, content: "Whining about some stupid bullshit about men or women or rich people or politics or something I don't know", author: 'User 1', createdAt: '2024-06-01' },
        { id: 2, content: 'Some funny content unrelated to the previous post. Something actually nice for a change.', author: 'User 2', createdAt: '2024-06-02' },
        { id: 3, content: "Some post informing people about the ONE THING THAT THEY'RE DOING WRONG when in actuality it's really not that big of a deal.", author: 'User 3', createdAt: '2024-06-03' }
    ];

  return (
    <div>
        {/* <h1>Feed</h1> */}
        <div className="flex flex-col gap-2">
            {mockFeed.map(item => (
                <div key={item.id} className="flex flex-col border p-4 rounded-[0.25rem]">
                    <span className="text-[0.875rem]">By {item.author} on {item.createdAt}</span>
                    <p>{item.content}</p>
                    <div className="flex gap-4">
                        <button>Like</button>
                        <button>Reply</button>
                        <button>Share</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Feed