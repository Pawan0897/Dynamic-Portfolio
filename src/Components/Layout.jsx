import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import Calender from "./Calender/Calender";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Stripe from "./PayGateway/Stripe";
import Contactus from "./Contactus";
import "../Style/style.css"
import Admin from "./AdminPanel/Admin";
import AddName from "./AdminPanel/AddName";
import AddSkills from "./AdminPanel/AddSkills";
import AddContactInfo from "./AdminPanel/AddContactInfo";
import AddWhatDo from "./AdminPanel/AddWhatDo";
import "../JS/cursor.js"
import AddPortfolio from "./AdminPanel/AddPortfolio";
const queryclient = new QueryClient;

export default function Layout() {
  return (
    <>
      {/************************************************************ */ }
    <QueryClientProvider client={queryclient}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/stripe" element={<Stripe />} />
        <Route path="/contactus" element={<Contactus />} />
        {/* ///////////////// admin panel pages */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/addname" element={<AddName />} />
        <Route path="/addskill" element={<AddSkills />} />
        <Route  path="/addcontactinfo" element={<AddContactInfo/>} />
        <Route path="/addwhatdo" element={<AddWhatDo />} />
        <Route path="/addportfolio" element={<AddPortfolio />} />
        
      </Routes>
    </QueryClientProvider>
    </>
  )
}
