//essas funções são chamadas de hook/gancho conectando html e css
import { useState, useEffect } from "react";

const Formulario = () => {
    //materia é onde armazenamos os dados digitados no input
    //setMateria é a função que permite colocar a materia no input
    //com o onchange
    const [materiaA, setMateriaA]= useState(0);
    const [materiaB, setMateriaB]= useState(0);
    const [materiaC, setMateriaC]= useState(0);
    const [nome, setNome]= useState('')
    const [idade,setIdade] = useState(0)
    //useEffect é uma funçao que sempre sera chamada quando houver uma mudança
    
    //mount motanda 
    //update atualizada ciclo de vida do react
    // onmount desmontada
    useEffect(()=>{
        console.log("A idade mudou")
    },[idade])

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("O componente finalizou")
        }
    }, []); //quando passamos o array vazia ele sera executado ao montar o componente
    
    useEffect(() => {
        console.log("o estado nome mudou")
    },[nome]); //dentro de array passamos a variavel que ira ativar o useEffect

    useEffect(()=>{
        console.log("materia A mudou para: " + materiaA);
    },[materiaA]);

    const alteraNome = (evento) => {
        
        // setNome(evento.target.value);
        setNome(function(estadoAnterior){
            
            return evento.target.value;
        })
    }
    //criando estado no REACT ' useState ' é uma função
    
    const renderizaResultado = () => {
        //lembrando que numeros passados por input sempre sao strings
        const soma = parseFloat(materiaA) + parseFloat(materiaB) + parseFloat(materiaC);
        const media = (soma / 3);
        
        if (media >= 7) {
            return(
                <p>Ola {nome} Você foi aprovado com media {media}</p>
            )
        }else {
            return(
                <p>Você {nome} não foi aprovado com media: {media}</p>
            )
        }
    }
    const arrayNomes = ['Vitor','Hellen', 'WEll'];
    return(
        <form>
            <ul>
            {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
            </ul>
            <ul>
                {arrayNomes.map((item,index) => (
                <>
                <li key={index}>  
                <b >{item}</b>
                </li>
                </>
                ))}
            </ul>
            <ul>
                {arrayNomes.map(function(item){
                    return <li key={item}>{item}</li>
                })}
            </ul>
            {/* no react temos que colocar /> no fim caso nao tenha conteudo digitado */}
            <input type="text" placeholder="Seu nome" onChange={evento => setNome(evento.target.value)}/>
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseFloat(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseFloat(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseFloat(evento.target.value))}/>
            <label  htmlFor="idade">idade</label>
            <input  onChange={({target}) => setIdade(target.value)} type="number" placeholder="digite sua idade" id="idade"/>
            {renderizaResultado()}
            {"idade é " + idade}
        </form>
    )
}

export default Formulario