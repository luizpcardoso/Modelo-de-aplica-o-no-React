import { Container } from "./style";
import { Header } from "../../components/header";
import { useContext, useEffect, useState } from "react";
import { ItemCard } from "../../components/CardItens/cardItens";
import { CasamentoCartContext } from "../../provider/CasamentoCart";
import { FormaturaCartContext } from "../../provider/FormaturaCart";
import CardCart from "../../components/CardCart/cardCart";


const Formatura = () => {

    const { formaturaCart } = useContext(FormaturaCartContext)
    const totalVolume = formaturaCart.reduce((a, b) => { return a + (b.boil_volume.value * b.numberUnits) }, 0).toFixed(2)
    const totalBrands = formaturaCart.length;


    return (
        <>
            <Header></Header>
            <Container>
                <div className="selected__products">
                    <h2>Produtos Selecionados</h2>
                    <div className="products">
                        {formaturaCart.length === 0 ?
                            <div>
                                <h3>Carrinho Vazio</h3>
                            </div>
                            :
                            <></>
                        }
                        {formaturaCart.map((item) => {
                            return (
                                <CardCart item={item} listType={"formatura"} key={item.id}></CardCart>
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
export default Formatura