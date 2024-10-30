import React, { useEffect, useState } from 'react'

const Func = () => {
    // initialization
    const [count, setCount] = useState(0)
    // componentDidMounr && componentDidUpadate
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000);

        //componentWillUnmount
        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div>
            <h2>collect: {count}</h2>
        </div>
    )
}

export default Func
