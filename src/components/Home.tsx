import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <ul>
          <li>
            <Link to="/hello-webvr">Hello WebVR</Link>
          </li>
          <li>
            <Link to="/hello-metaverse">Hello Metaverse</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/360image">360 Image</Link>
          </li>
          <li>
            <Link to="/dynamic-lights">Dynamic Lights</Link>
          </li>
          <li>
            <Link to="/anime-ui">Anime UI</Link>
          </li>
          <li>
            <Link to="/animation">Animation</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
