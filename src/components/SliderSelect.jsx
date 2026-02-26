import SliderComponent from './common/SliderComponent';

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000

  console.log(data);

  return (
    <div>
      <SliderComponent amount={data.homeValue} unit="$" defaultValue={data.homeValue} value={data.homeValue} min={1000} max={bank_limit} label="Home Value" step={100} onChange={(e, value) => setData({
        ...data,
        homeValue: value
      })} />

      <SliderComponent amount={3500} unit="$" defaultValue={3000} min={0} max={3000} label="Down Payment" step={100} onChange={(e) => console.log(e.target.value)} />

      <SliderComponent amount={3500} unit="$" defaultValue={3000} min={0} max={3000} label="Loan Amount" step={100} onChange={(e) => console.log(e.target.value)} />

      <SliderComponent amount={2} unit="%" defaultValue={2} min={2} max={18} label="Interest Rate" step={0.5} onChange={(e) => console.log(e.target.value)} />
    </div>
  )
}

export default SliderSelect                       