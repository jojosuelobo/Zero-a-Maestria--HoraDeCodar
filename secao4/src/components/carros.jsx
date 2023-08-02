import styles from './Carros.module.css';

export default function carros() {
    const carros = ["Sedan", "Gol", "Fiat", "Fusca"]
    return (
        <div>
            <h1 className='carro'>Carro!!</h1>
            { carros.map( (carro) => (
                <p className={styles.carro} key={carro}>Nome: {carro}</p>                
            ) ) }
        </div>
    )
}
