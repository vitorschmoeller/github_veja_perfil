import { useState,useEffect } from "react";
import styles from './ReposList.module.css'
const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]); //dentro da const é uma desestruturação do useState
    const [estaCarregando, setEstaCarregando] = useState(true);
    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() =>{
                    setEstaCarregando(false);
                    setRepos(resJson);
                    console.log(resJson);

                },1000)
            })
            .catch(error =>{
                console.error('Erro ao obter repositorios',error)
            })
    }, [nomeUsuario]);
    return(
        <div className="container">
        {estaCarregando ?(
            <h1>Carregando...</h1>
            
        ):(
        <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.itemName}>
                    <b >Nome:</b> {repositorio.name}
                    </div>
                    <div className={styles.itemLanguage}>
                    <b>Linguagem:</b> {repositorio.language}
                    </div>
                    <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                </li>
            ))}
            <li>Repositório</li>
        </ul>

        )}
        </div>
    )
}

export default ReposList;
