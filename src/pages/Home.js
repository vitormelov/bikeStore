import Bikes from "../Components/Bikes";
import Spotlight from "../Components/Spotlight";
import Stepper from "../Components/Stepper";


export default function Home() { 
    return (
      <div>
        <Stepper/>

        <Bikes/>

        <Spotlight/>
      </div>
    )
  }