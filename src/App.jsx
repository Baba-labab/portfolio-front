import { useState } from 'react'
import { projects } from "./data/projects.js"
import Home from "./pages/Home.jsx"

function App() {
  console.log(projects);

  return (
    <div className="min-h-screen bg-gray-500">
      
      <Home></Home>
     
    </div>
  )
}

export default App
