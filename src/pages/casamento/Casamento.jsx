import { Container } from "./style";
import { Header } from "../../components/header";
import { useContext, useEffect, useState } from "react";
import { ItemCard } from "../../components/CardItens/cardItens";
import { CasamentoCartContext } from "../../provider/CasamentoCart";
import CardCart from "../../components/CardCart/cardCart";


const Casamento = () => {

    const { casamentoCart } = useContext(CasamentoCartContext)
    const totalVolume = casamentoCart.reduce((a, b) => { return a + (b.boil_volume.value * b.numberUnits) }, 0).toFixed(2)
    const totalBrands = casamentoCart.length;


    return (
        <>
            <Header></Header>
            <Container>
                <div className="selected__products">
                    <h2>Produtos Selecionados</h2>
                    <div className="products">
                        {casamentoCart.length === 0 ?
                            <div>
                                <h3>Carrinho Vazio</h3>
                            </div>
                            :
                            <></>
                        }
                        {casamentoCart.map((item) => {
                            return (
                                <CardCart item={item} listType={"casamento"} key={item.id}></CardCart>
                            )
                        })}
                    </div>
                </div>
                <div className="detail">
                    <span className="volumeTitle">Volume total</span>
                    <span>{totalVolume}L</span>
                    <span className="volumeTitle">Total de Rótulos</span>
                    <span>{totalBrands}</span>

                </div>

            </Container>

        </>
    )



}
export default Casamento