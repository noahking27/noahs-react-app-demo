import { useState } from 'react'

const WinCounter = () => {
    // state keeps track of things that change
    // anytime you see the world use, its a hook
    // useState, useMemo, useEffect, useInstructor
    const [wins, setWins] = useState(0)
    console.log('whatareyou:', wins)

    const handleClick = () => setWins(wins + 1)

    return <div>
        <button onClick={handleClick}>Click me to win</button>
        <h1>You have won {wins} times</h1>
    </div>
}

export default WinCounter
