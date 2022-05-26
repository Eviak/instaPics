import React from "react"
import "./App.css"

import { Routes, Route } from "react-router"
import routes from './routes'

import AppHeader from "./cmps/app-header"

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <p>hello</p>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={true}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
    </div>
  )
}

export default App
