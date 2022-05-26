import React from "react"
import { Link } from "react-router-dom"

export default function AppHeader() {
  return (
    <header className="app-header flex">
      <div className="logo">InstaPics</div>
      <input type="text" name="" id="" />
      <nav>
        <Link to="/">
          <input
            type="image"
            src={require("../assets/imgs/home.png")}
            alt="Home page"
          />
        </Link>
        <input
          type="image"
          src={require("../assets/imgs/add.png")}
          alt="New post"
        />
        <input
          type="image"
          src={require("../assets/imgs/heart.png")}
          alt="Notifications"
        />
        <Link to="/profile">
          <input
            type="image"
            src={require("../assets/imgs/def-prof-img.png")}
            alt="Profile page"
          />
        </Link>
      </nav>
    </header>
  )
}
