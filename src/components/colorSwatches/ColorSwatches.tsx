import { useState } from "react"
import './ColorSwatches.css'

const ColorSwatches = () => {
    const [colors, setColors] = useState<string[]>([])
    const [colorInput, setColorInput] = useState<string>('')

    const addColor = () => {
        if (!colorInput) {
            alert('Please enter a valid color')
            return
        }
        setColors([...colors, colorInput])
        setColorInput('')
    }

    const changeBgColor = (bg: string) => {
        document.body.style.backgroundColor = bg
    }

    return (
        <section>
            <h1>Color Swatches</h1>
            <input type="text" value={colorInput} onChange={(e) => setColorInput(e.target.value)} />
            <button className="" onClick={addColor}>Add color</button>
            <div className="color-picker__container">
                {colors.map((color, index) =>
                    <div key={index} className="color-opt" style={{ background: `${color}` }} onClick={() => changeBgColor(color)}>
                        <p>{color}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ColorSwatches