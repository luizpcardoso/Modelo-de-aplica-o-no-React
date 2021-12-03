import { Container } from "./style";
import { useContext } from "react";
import { CasamentoCartContext } from "../../provider/CasamentoCart";
import { FormaturaCartContext } from "../../provider/FormaturaCart";
import { ConfraternizacaoCartContext } from "../../provider/ConfraternizacaoCart";


const CardCart = ({ item, number, listType }) => {

    const { removeCasamentoCart } = useContext(CasamentoCartContext)
    const { removeFormaturaCart } = useContext(FormaturaCartContext)
    const { removeConfraternizacaoCart } = useContext(ConfraternizacaoCartContext)


    const remove = (item) => {
        if (listType === "casamento") {
            removeCasamentoCart(item)
        }
        if (listType === "formatura") {
            removeFormaturaCart(item)

        }
        if (listType === "confraternizacao") {
            removeConfraternizacaoCart(item)

        }
    }


    return (
        <>
            <Container>

                <div className="textImg">
                    <div className="imgContainer"><img src={item.image_url}></img></div>

                </div>
                <div className="titleCenter">
                    <h3>{item.name}</h3>
                    <span className="Volume">{item.boil_volume.value} {item.boil_volume.unit} por unidade</span>
                    <span className="date">{item.first_brewed}</span>


                </div>
                <div className="end">
                    <span>{item.numberUnits} unidades</span>
                    <button className="remove" onClick={() => { remove(item) }}>Remover</button>

                </div>


            </Container>
        </>
    )

}

export default CardCart