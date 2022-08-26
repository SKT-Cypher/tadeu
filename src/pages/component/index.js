import './index.scss';

export function CardPessoa(props){

    
    return (
        <div className={props.alinhamento}>
            Salve, eu sou mono {props.nome}, tenho mais de {props.maestria} de maestria e sou {props.elo}, vai querer x1 seu lixo? jogo lol a 4 anos fi me respeita. "League of Legends"
            <div className={props.margem}><img className='img' src={props.avatar} alt="avatar"></img></div>
        </div>
    )
}