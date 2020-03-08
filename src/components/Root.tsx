import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'

const HelloWebVR = React.lazy(() => import('./demos/HelloWebVR'))
const HelloMetaverse = React.lazy(() => import('./demos/HelloMetaverse'))
const Gallery = React.lazy(() => import('./demos/Gallery'))
const Image360 = React.lazy(() => import('./demos/Image360'))
const DynamicLights = React.lazy(() => import('./demos/DynamicLights'))
const AnimeUI = React.lazy(() => import('./demos/AnimeUI'))

export const Root: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/hello-webvr">
            <HelloWebVR />
          </Route>
          <Route path="/hello-metaverse">
            <HelloMetaverse />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/360image">
            <Image360 />
          </Route>
          <Route path="/dynamic-lights">
            <DynamicLights />
          </Route>
          <Route path="/anime-ui">
            <AnimeUI />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  )
}
