import { useState } from "react"
import CodeInput from "./Components/CodeInput"
import ExplanationBox from "./Components/ExplanationBox"

function App() {

  const [explanation, setExplanation] = useState("")

  return (

    <div>

      <h1>AI Code Explainer</h1>

      <CodeInput setExplanation={setExplanation} />

      <ExplanationBox explanation={explanation} />

    </div>

  )

}

export default App