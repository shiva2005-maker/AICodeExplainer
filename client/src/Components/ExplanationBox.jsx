import '../App.css'
function ExplanationBox({ explanation }) {

    return (
        <div>

            <h2>Explanation</h2>

            <pre className="explanation">{explanation}</pre>

        </div>
    )

}

export default ExplanationBox