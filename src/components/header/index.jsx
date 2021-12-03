import { Container } from "./style"
import { useHistory } from "react-router"
import { useContext, useEffect } from "react";
import { CasamentoCartContext } from "../../provider/CasamentoCart";
import { FormaturaCartContext } from "../../provider/FormaturaCart";
import { ConfraternizacaoCartContext } from "../../provider/ConfraternizacaoCart";



export const Header = () => {


    const { confraternizacaoCart } = useContext(ConfraternizacaoCartContext)
    const { casamentoCart } = useContext(CasamentoCartContext)
    const { formaturaCart } = useContext(FormaturaCartContext)

    const totalFormaturaCart = formaturaCart.length
    const totalCasamentoCart = casamentoCart.length
    const totalConfraternizacaoCart = confraternizacaoCart.length

    useEffect(() => {


    })

    const history = useHistory()


    return (

        <Container>
            <div className="logo" onClick={() => { history.push("/") }}><h1>Drink</h1><span>club</span></div>
            <ul>
                <li onClick={() => { history.push("/casamento") }}>Casamento{totalCasamentoCart > 0 ? <div className="yellowBollcas">{totalCasamentoCart}</div> : <></>}</li>
                <li onClick={() => { history.push("/formatura") }}>Formatura{totalFormaturaCart > 0 ? <div className="yellowBollform">{totalFormaturaCart}</div> : <></>}</li>
                <li onClick={() => { history.push("/confraternizacao") }}>Confraternização{totalConfraternizacaoCart > 0 ? <div className="yellowBollconf">{totalConfraternizacaoCart}</div> : <></>}</li>
            </ul>


        </Container>
    )
}