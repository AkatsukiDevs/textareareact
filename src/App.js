import React from "react"
import { Textarea } from "evergreen-ui"

export default function App() {
  const [summary, setSummary] = React.useState("")

  return (
      <div
          style={{
              display: "block",
              width: 700,
              paddingLeft: 30,
          }}
      >
          <h4>Textarea Component</h4>
          <Textarea
              onChange={(e) => setSummary(e.target.value)}
              placeholder='Enter your Text'
          />
          <br></br>
          Your text: {summary}
      </div>
  )
}


