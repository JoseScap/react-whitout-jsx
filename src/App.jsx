import React, { useState } from "react"
import { v4 } from "uuid"
import Form from "./components/Form"
import List from "./components/List"

function App() {
  const [people, setPeople] = useState([])
  const [name, setName] = useState("")

  const handleChangeName = (name) => {
    setName(name)
  }

  const handleSubmit = () => {
    setPeople(oldPeople => [...oldPeople, {
      name,
      id: v4()
    }])
    setName("")
  }

  // ============================================
  // return (
  //   <div>
  //     <h1>React without JSX</h1>
  //     <hr />
  //     <Form value={name} onSubmit={handleSubmit} onChange={handleChangeName} />
  //     <List people={people} />
  //   </div>
  // )
  // ============================================
  return React.createElement(
    "div",
    {},
    [
      React.createElement(
        "h1",
        {
          key: "heading-1"
        },
        "React Without JSX"
      ),
      React.createElement(
        "hr",
        {
          key: "horizontal-row"
        }
      ),
      React.createElement(
        Form,
        {
          key: "form",
          value: name,
          onSubmit: handleSubmit,
          onChange: handleChangeName,
        }
      ),
      React.createElement(
        List,
        {
          key: "list",
          people: people
        }
      )
    ]
  )
  // ============================================
}

export default App
