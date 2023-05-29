import { Routes, Route} from "react-router-dom";
import Form from "./src/components/Form";
import Produtcs from "./src/components/Produtcs";

function Router() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Form/>}/>
            <Route path="/cadastrar-produto" element={<Form/>}/>
            <Route path="/lista-produtos" element={<Produtcs/>}/>
            {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </>      

  )
}

export default Router;