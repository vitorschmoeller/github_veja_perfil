//qualquer codigo react:jsx segue a arquitetura de
//primeiro uma função que engloba o javaScript e o html respectivamente
import styles from './Perfil.module.css'


// export default (props) => {
export default ({ nomeUsuario}) => {
    // const usuario = {
    //     nome: 'Antonio Vitor',
    //     avatar: 'https://github.com/vitorschmoeller.png'
    // }
    // const { endereco, nome } = props;
    return (
        <header className={styles.header}>
            {/* converte objeto em uma string */}
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="foto perfil" />
            <h1 className={styles.name}>
                {nomeUsuario}
                </h1>
        </header>
    )
}


// const Perfil = () => {
//     const usuario = {
//         nome: 'Antonio Vitor',
//         avatar: 'https://github.com/vitorschmoeller.png'
//     }
//     return(
//         <div>
//             <img className="perfil-avatar" src={usuario.avatar} alt="Foto perfil"/>
//             <h3 className="perfil-titulo" >{usuario.nome}</h3>
//         </div>
//     )
// }

// export default Perfil;

// function pernil(){
//     const usuario = {

//     }
//     return(
//         <div>
//             <img src=""/>
//             <h3></h3>
//         </div>
//     )
// }