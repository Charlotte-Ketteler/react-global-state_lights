import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialState = [
  { id: 1, name: "Living Room", isOn: false, count: 0},
  { id: 2, name: "Kitchen", isOn: false, count: 0},
  { id: 3, name: "Bedroom", isOn: false, count: 0},
  { id: 4, name:"Bathroom", isOn: false, count: 0},
  { id: 5, name: "Garage", isOn: false, count: 0},
  { id: 6, name: "Porch", isOn: false, count: 0},
  { id: 7, name:"Garden", isOn: false, count: 0},
  { id: 8, name:"Office", isOn: false, count: 0}
]

export default function App({ Component, pageProps }) {

const [isOn, setIsOn] = useState(initialState);

const countSum = isOn.reduce((acc, light) => acc + light.count, 0);
const countAverage = countSum / isOn.length;
const isOnCount = isOn.find((light) => light.isOn === true).count;


function handleAdd(id){
  setIsOn(
    isOn.map((light) => light.id === id ? {...light, isOn: !light.isOn})
  )
}

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps}
        isOn={isOn}
        onHandleAdd={handleAdd}
        countAverage={countAverage}
        isOnCount={isOnCount} />
    </Layout>
  );
}
