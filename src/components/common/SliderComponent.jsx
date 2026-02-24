import Slider from '@mui/material/Slider';

const SliderComponent = ({defaultValue}) => {
  return (
    <Slider defaultValue={defaultValue} aria-label="Default" valueLabelDisplay="auto" />
  )
}

export default SliderComponent