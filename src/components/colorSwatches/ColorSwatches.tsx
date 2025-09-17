import { useState } from "react"
import './ColorSwatches.css'

const ColorSwatches = () => {
    const [colors, setColors] = useState<string[]>([])
    const [color, setColor] = useState<string>('')


    const addColor = () => {
        if (!color) {
            alert('Please enter a valid color')
        }
        setColors([...colors, color])
        setColor('')
    }

    return (
        <section>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            <button className="" onClick={addColor}>Add color</button>
            <div className="color-picker__container">
                {colors.map((color, index) =>
                    <div key={index} className="color-opt" style={{background: `${color}`}}>
                        <p>{color}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ColorSwatches