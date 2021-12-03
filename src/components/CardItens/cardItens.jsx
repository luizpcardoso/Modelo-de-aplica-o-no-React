import { useState } from "react";
import { Container } from "./style";
import { CartContext } from "../../provider/cart";
import { useContext } from "react";
import { CasamentoCartContext } from "../../provider/CasamentoCart";
import { FormaturaCartContext } from "../../provider/FormaturaCart";
import { ConfraternizacaoCartContext } from "../../provider/ConfraternizacaoCart";

export const ItemCard = ({ item }) => {

    const [displayButtons, setDisplayButtons] = useState(true);
    const { addCasamentoCart } = useContext(CasamentoCartContext);
    const { addFormaturaCart } = useContext(FormaturaCartContext);
    const { addConfraternizacaoCart } = useContext(ConfraternizacaoCartContext);






    return (
        <Container>
            <div className="imgContainer"><img src={item.image_url}></img></div>
            <h3>{item.name}</h3>
            <span className="date">{item.first_brewed}</span>
            <span className="description">{item.description}</span>
            <span className="Volume">{item.boil_volume.value}{item.boil_volume.unit}</span>
            <div className="buttonsDisplay">
                {displayButtons ?
                    <button className="buttonAdd" onClick={() => { setDisplayButtons(false) }}>Adicionar</button>
                    :
                    <>
                        <button className="buttonTypes" onClick={() => { addCasamentoCart(item) }}>Casamento</button>
                        <button className="buttonTypes" onClick={() => { addFormaturaCart(item) }}>Formatura</button>
                        <button className="buttonTypesLast" onClick={() => { addConfraternizacaoCart(item) }}>Confraternização</button>
                    </>

                }</div>

        </Container>
    )
}