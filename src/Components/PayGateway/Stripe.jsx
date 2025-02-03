import { Elements } from "@stripe/react-stripe-js";
import Header from "../Header";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "./StripeForm";


export default function Stripe() {
 
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#0570de",
        colorBackground: "#ffffff",
        colorText: "#00000",
        color: "#ffff",
        
      },
    },
    rules: {
      ".Input": {
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "4px",
        color: "#30313d",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      ".Input:focus": {
        border: "1px solid #0570de",
        outline: "none",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
      ".Label": { 
        color: "#ffff", 
        fontSize: "14px",
        marginBottom: "4px"
        },
    },
  };


   // //////////////////////////////////  cursor
   const cursorDot = document.querySelector("[data-cursor-dot]");
   const cursorOutline = document.querySelector("[data-cursor-outline]");
   window.addEventListener("mousemove",function(e){
     const posX = e.clientX;
     const posY = e.clientY;
   
     cursorDot.style.left = `${posX}px`;
     cursorDot.style.top = `${posY}px`;
   
     // cursorOutline.style.left = `${posX}px`;
     // cursorOutline.style.top = `${posY}px`;
   
     cursorOutline.animate({
       left:`${posX}px`,
       top:`${posY}px`
       
     },{duration:500,fill:"forwards"});
   
   })
 
 
   // ////////////////////////////////////////
  return (
    <>
      <Header />
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      <div className="container stripe mt-5 pt-5">
        <div className="row">
          <div className="col-md-4 offset-md-4 p-4  stripe-b ">
            <Elements
              stripe={stripePromise}
              options={options}
              className="text-light"
            >
              <StripeForm />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
}
