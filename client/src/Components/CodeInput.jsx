import { useState } from "react"
import "../App.css"

function CodeInput({ setExplanation }) {

    const [code, setCode] = useState("")

    const handleExplain = async () => {

        const res = await fetch("http://localhost:5000/api/explain", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ code })
        })

        const data = await res.json()

        setExplanation(data.explanation)

    }

    return (
        <div>

            <textarea
                rows="10"
                cols="60"
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />

            <br />

            <button className="btn" onClick={handleExplain}>
                Explain Code
            </button>

        </div>
    )

}

export default CodeInput