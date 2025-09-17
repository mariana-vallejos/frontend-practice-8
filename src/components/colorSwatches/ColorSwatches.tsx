import { useState } from "react";
import './ColorSwatches.css';

const ColorSwatches = () => {
    const [colors, setColors] = useState<string[]>([]);
    const [colorInput, setColorInput] = useState<string>('');

    const isValidHex = (color: string) => {
        return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);
    };

    const addColor = () => {
        if (!colorInput || !isValidHex(colorInput)) {
            alert('Please enter a valid hex color (e.g., #FF0000 or #F00)');
            setColorInput('')
            return;
        }

        const normalizedColor = colorInput.trim().toUpperCase()

        if (colors.includes(normalizedColor)) {
            alert('Color already added.');
            return;
        }
        setColors([...colors, normalizedColor]);
        setColorInput('');
    };

    const changeBgColor = (bg: string) => {
        document.body.style.backgroundColor = bg;
    };

    return (
        <section>
            <h1>Color Swatches</h1>
            <input
                type="text"
                value={colorInput}
                onChange={(e) => setColorInput(e.target.value)}
                placeholder="#FF5733"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addColor();
                    }
                }}
            />
            <button onClick={addColor}>Add color</button>
            <div className="color-picker__container">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="color-opt"
                        style={{ background: color }}
                        onClick={() => changeBgColor(color)}
                    >
                        <p>{color}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ColorSwatches;
