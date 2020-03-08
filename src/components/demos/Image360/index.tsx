import React from 'react'

import sky from './puydesancy.jpg'

export default () => {
  return (
    <a-scene>
      <a-sky src={sky} rotation="0 -130 0"></a-sky>
      <a-text
        font="kelsonsans"
        value="Puy de Sancy, France"
        width="6"
        position="-2.5 0.25 -1.5"
        rotation="0 15 0"
      ></a-text>
    </a-scene>
  )
}
