export default function Card(props){
    return(
        <div>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
            </div>
            <div>
                <form action="">
                    <label htmlFor="">{props.label_01}</label>
                    <input type="number" />

                    <label htmlFor="">{props.label_02}</label>
                    <input type="number" />

                    <button type="submit">{props.label_03}</button>
                </form>
            </div>
        </div>
    )
}