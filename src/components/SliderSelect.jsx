import SliderComponent from './common/SliderComponent';

const SliderSelect = () => {
  return (
    <div>
      <SliderComponent amount={3500} unit="$" defaultValue={3000} min={1000} max={10000} label="Loan Amount" step={100} onChange={(e) => console.log(e.target.value)} />
    </div>
  )
}

export default SliderSelect