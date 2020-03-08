import React from 'react'

import blip1 from './audio/321103__nsstudios__blip1.wav'
import blip2 from './audio/321104__nsstudios__blip2.wav'
import glow1 from './img/glow1.png'
import ring1 from './img/ring1.png'
import ring2 from './img/ring2.png'
import ring3 from './img/ring3.png'
import ring4 from './img/ring4.png'
import ring5 from './img/ring5.png'
import schematic1 from './img/schematic1.png'
import schematic2 from './img/schematic2.png'
import schematic3 from './img/schematic3.png'
import schematic4 from './img/schematic4.png'
import schematic5 from './img/schematic5.png'
import text1 from './img/text1.png'
import text2 from './img/text2.png'
import text3 from './img/text3.png'
import text4 from './img/text4.png'
import engine from './models/engine.glb'

export default () => {
  return (
    <a-scene renderer="colorManagement: true;">
      <a-assets>
        <a-asset-item id="engine" src={engine}></a-asset-item>
        <a-mixin id="image" geometry="height: 2; width: 2"></a-mixin>
        <a-mixin
          id="delayVisible"
          event-set__loaded="visible: true"
          visible="true"
        ></a-mixin>
        <audio id="blip1" src={blip1}></audio>
        <audio id="blip2" src={blip2}></audio>
        <img id="glow1" src={glow1} />
        <img id="ring1" src={ring1} />
        <img id="ring2" src={ring2} />
        <img id="ring3" src={ring3} />
        <img id="ring4" src={ring4} />
        <img id="ring5" src={ring5} />
        <img id="schematic1" src={schematic1} />
        <img id="schematic2" src={schematic2} />
        <img id="schematic3" src={schematic3} />
        <img id="schematic4" src={schematic4} />
        <img id="schematic5" src={schematic5} />
        <img id="text1" src={text1} />
        <img id="text2" src={text2} />
        <img id="text3" src={text3} />
        <img id="text4" src={text4} />
      </a-assets>

      <a-entity position="1.75 0 1.2" rotation="0 28 0">
        <a-camera position="0 0 0" near="0.1"></a-camera>
      </a-entity>

      <a-entity position="0 0 -3">
        <a-gltf-model
          src="#engine"
          rotation="90 0 0"
          scale="18 18 18"
        ></a-gltf-model>
      </a-entity>

      <a-entity
        id="wall-lights"
        position="-7.25 1.5 2.9"
        rotation="0 90 0"
        scale="1.25 1.25 1.25"
      >
        <a-entity position="0 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 350"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="1 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 400"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="2 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 450"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="3 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 500"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="4 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 550"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="5 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 600"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="6 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 650"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="7 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 700"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="8 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 750"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="9 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 800"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="10 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 850"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="11 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 900"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="12 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 950"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>

        <a-entity position="13 0 0" scale="0.05 0.05 0.05">
          <a-plane
            mixin="delayVisible"
            width="1"
            height="4"
            shader="flat"
            color="#B4E2F8"
            event-set__loaded="_delay: 1000"
          ></a-plane>
          <a-plane
            width="6"
            height="4"
            color="#586266"
            opacity="0.6"
            position="0 0 -.01"
          ></a-plane>
        </a-entity>
      </a-entity>

      <a-entity id="schematic-2" position="0 0 -6" scale="0.7 0.7 0.7">
        <a-image
          mixin="image delayVisible"
          src="#glow1"
          scale="5 5 5"
          position="0 0 -2"
          event-set__loaded="_delay: 1500"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#ring2"
          scale="1.75 1.75 1.75"
          position="0 0 -1.2"
          event-set__loaded="_delay: 1400"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#ring5"
          scale="1.2 1.2 1.2"
          position="0 -1.5 -2.1"
          event-set__loaded="_delay: 1550"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#schematic5"
          scale="2 2 2"
          position="2.5 0 -1.02"
          opacity="0.75"
          event-set__loaded="_delay: 1500"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#schematic4"
          scale="1.5 1.5 1.5"
          position="0 -3 -1.01"
          rotation="0 0 90"
          opacity="0.75"
          event-set__loaded="_delay: 1500"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#schematic3"
          scale="1 1 1"
          position="0 2.7 -1"
          opacity="0.75"
          event-set__loaded="_delay: 1450"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#schematic1"
          scale="2 2 2"
          event-set__loaded="_delay: 1400"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#text2"
          scale=".5 .5 .5"
          position="-1 3 .02"
          event-set__loaded="_delay: 1350"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#text4"
          position="-2 -2 .03"
          event-set__loaded="_delay: 1300"
        ></a-image>
      </a-entity>

      <a-entity id="schematic-1" position="0 0 -3">
        <a-image
          mixin="image delayVisible"
          src="#schematic2"
          scale="0.7 0.7 0.7"
          event-set__loaded="_delay: 1200"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#text1"
          scale="0.2 0.2 0.2"
          position="2 0 .02"
          event-set__loaded="_delay: 1200"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#text3"
          scale="0.4 0.4 0.4"
          position="-1 1 .01"
          event-set__loaded="_delay: 1200"
        ></a-image>
      </a-entity>

      <a-entity id="rings-group-3" position="0 0 -2" scale="0.5 0.5 0.5">
        <a-image
          mixin="image delayVisible"
          src="#ring3"
          scale=".8 .8 .8"
          event-set__loaded="_delay: 1000"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#ring5"
          scale=".9 .9 .9"
          position="0 0 .01"
          event-set__loaded="_delay: 1100"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#ring3"
          position="0 0 .02"
          event-set__loaded="_delay: 1100"
          animation__scale="property: scale; from: 1 1 1; to: 1.2 1.2 1.2; delay: 1100; dur: 250; easing: easeOutCubic"
        ></a-image>
      </a-entity>

      <a-entity id="rings-group-2" position="0 0 -1" scale="0.5 0.5 0.5">
        <a-image
          mixin="image delayVisible"
          src="#ring2"
          scale="1.2 1.2 1.2"
          position="0 0 .01"
          event-set__loaded="_delay: 800"
        ></a-image>
        <a-image
          mixin="image delayVisible"
          src="#text1"
          scale="0.3 0.3 0.3"
          position="1.4 0 .02"
          event-set__loaded="_delay: 900"
        ></a-image>
      </a-entity>

      <a-entity id="rings-group-1" scale="0.6 0.6 0.6">
        <a-image
          {...{ mixin: 'delayVisible' }}
          {...{ mixin: 'image' }}
          src="#ring5"
          scale="1.2 1.2 1.2"
          position="0 0 0"
          event-set__loaded="_delay: 600"
        ></a-image>
        <a-image
          {...{ mixin: 'delayVisible' }}
          {...{ mixin: 'image' }}
          src="#ring4"
          scale="1.2 1.2 1.2"
          position="0 0 .01"
          event-set__loaded="_delay: 600"
        ></a-image>
        <a-image
          {...{ mixin: 'delayVisible' }}
          {...{ mixin: 'image' }}
          src="#ring3"
          position="0 0 .02"
          event-set__loaded="_delay: 700"
          animation__scale="property: scale; from: 1 1 1; to: 1.25 1.25 1.25; delay: 700; dur: 250; easing: easeOutCubic"
        ></a-image>
      </a-entity>

      <a-light
        type="point"
        color="#94c6ff"
        distance="15"
        position="0 0 -12"
        intensity="0"
        animation="property: light.intensity; from: 0; to: 2; delay: 750; dur: 500"
      ></a-light>
      <a-light
        type="point"
        color="#94c6ff"
        distance="17"
        position="0 0 -6"
        intensity="0"
        animation="property: light.intensity; from: 0; to: 1; delay: 500; dur: 500"
      ></a-light>
      <a-light type="ambient" color="#4f6487"></a-light>

      <a-entity sound="autoplay: true; src: #blip1"></a-entity>
      <a-entity sound="autoplay: true; src: #blip2"></a-entity>
    </a-scene>
  )
}
