import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const SliderComponent = ({ defaultValue, min, max, amount, label, unit, step, value, onChange }) => {
  return (
    <Stack my={1.4}>
      <Box sx={{ width: 500 }}></Box>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">{unit} {amount}</Typography>
      </Stack>
      <Slider min={min} max={max} defaultValue={defaultValue} aria-label="Default" valueLabelDisplay="auto" marks step={step} value={value} onChange={onChange} />

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">{unit} {min}</Typography>
        <Typography variant="caption" color="text.secondary">{unit} {max}</Typography>
      </Stack>
    </Stack >
  )
}
export default SliderComponent