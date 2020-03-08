import React from 'react'

import pink from './img/1hyyIUi.jpg'
import grid from './img/25P1geh.png'
import chrome from './img/WMNH2OF.jpg'
import sky from './img/WqlqEkq.jpg'
import dawningFont from './data/dawningOfANewDayRegular.typeface.json'
import exoFont from './data/exo2Black.typeface.json'
import exoItalicFont from './data/exo2BlackItalic.typeface.json'

export default () => {
  return (
    <a-scene renderer="antialias: true" background="color: #FAFAFA">
      <a-assets>
        <img id="pink" src={pink} />
        <img src={grid} id="grid" />
        <img src={chrome} id="chrome" />
        <img id="sky" src={sky} />
        <a-asset-item id="dawningFont" src={dawningFont}></a-asset-item>
        <a-asset-item id="exoFont" src={exoFont}></a-asset-item>
        <a-asset-item id="exoItalicFont" src={exoItalicFont}></a-asset-item>
      </a-assets>

      <a-entity
        scale="2 2 2"
        geometry="primitive: torusKnot"
        position="0 6 -10"
        material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
      >
        <a-animation
          easing="linear"
          attribute="rotation"
          dur="10000"
          to="0 0 360"
          repeat="indefinite"
        ></a-animation>
      </a-entity>

      <a-entity position="-3 1 -6" rotation="5 0 0">
        <a-entity
          rotation="0 0 5"
          position="0 2 0.2"
          text-geometry="value: Virtual Reality; font: #dawningFont; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 12; size: 1; height: 0;"
          material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;"
        ></a-entity>
      </a-entity>

      <a-entity
        geometry="primitive: plane; width: 10000; height: 10000;"
        rotation="-90 0 0"
        material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;"
      ></a-entity>

      <a-entity
        light="color: #ccccff; intensity: 1; type: ambient;"
        visible=""
      ></a-entity>
      <a-entity
        light="color: #ffaaff; intensity: 1.5"
        position="5 5 5"
      ></a-entity>
      <a-entity
        light="color: white; intensity: 0.5"
        position="-5 5 15"
      ></a-entity>
      <a-entity light="color: white; type: ambient;"></a-entity>

      <a-sky src="#sky" rotation="0 -90 0"></a-sky>
    </a-scene>
  )
}
