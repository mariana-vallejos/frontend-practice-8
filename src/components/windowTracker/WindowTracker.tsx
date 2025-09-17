import { useEffect, useState } from "react"

type Size = {
    width: number
    height: number
}

const WindowTracker = () => {
    const [sizeWindow, setSizeWindow] = useState<Size>()

    useEffect(() => {

    }, [])
    
    return (
        <section>
            <h2>Current size window</h2>
            <p>Current width: {sizeWindow?.width}</p>
            <p>Current width: {sizeWindow?.height}</p>
        </section>
    )
}

export default WindowTracker