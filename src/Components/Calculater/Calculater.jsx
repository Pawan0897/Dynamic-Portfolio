import { useState } from "react";
import Header from "../Header";

export default function Calculater() {
    const  [add,setadd] = useState(0)
    const swit = (plus) => {
        switch (plus) {
            case "-" :
                setadd(add+5)
                break;
        
            case "+":
                setadd(add -3)
                break;
        }
    }
  return (
    <>
    <Header />
    <h1>
        {add}
    </h1>
    <button onClick={() => swit("+")}>plus</button>
      
    </>
  )
}
