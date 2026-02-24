import React from 'react'
import SliderComponent from './common/SliderComponent';

const SliderSelect = () => {
  return (
    <div>
      <SliderComponent defaultValue={50} />
      <SliderComponent defaultValue={75} />
      <SliderComponent defaultValue={25} />
    </div>
  )
}

export default SliderSelect