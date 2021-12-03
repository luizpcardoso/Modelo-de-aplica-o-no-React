import { Container } from "./style";


export const Modal = ({ close }) => {

    return (

        <Container>
            <div className="box">
                <h1>modal</h1>
                <button onClick={() => { close(false) }}>exit</button>
            </div>
        </Container>
    )


}