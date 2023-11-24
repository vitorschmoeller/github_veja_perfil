//Primeiro Importação depois código do componente
import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario/index";
import ReposList from "./components/ReposList/index"
import Teste from "./components/teste/index"


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario ] = useState('');
  
  return (
    <>
    {/* onBlur ele espera terminarmos de digitar e sair do campo para acionar o evento*/}
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      
      {/* essas chaves tb funcionam como um if passando dessa form */}
      {/* {formularioEstaVisivel && <Formulario />} */}
      

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

      {/* {formularioEstaVisivel && (
      <Formulario/>
      )}
  <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    
    <div>
        <Teste />
    </div>
    </>
    
  )
}

export default App
