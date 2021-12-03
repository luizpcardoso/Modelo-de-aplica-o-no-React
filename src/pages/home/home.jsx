import { Container } from "./style"
import { Header } from "../../components/header"
import api from "../../services/api"
import { useContext, useEffect, useState } from "react"
import { ItemCard } from "../../components/CardItens/cardItens"
import { Modal } from "../../components/modal"
import { ProductsContext } from "../../provider/products"
import { CartContext } from "../../provider/cart"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


const Home = () => {

    const { CapturePerPage, products, setProducts } = useContext(ProductsContext)
    const [page, setPage] = useState(1)
    // const [products, setProducts] = useState([])//CapturePerPage(page)
    const { cart, addCart } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)

    console.log(page);

    useEffect(() => {
        CapturePerPage(1)


    }, [])
    useEffect(() => {
        CapturePerPage(page)


    }, [page])

    return (
        <>
            <Header></Header>
            <Container>


                <div className="menu"></div>
                <div className="pageLeft">
                    <button onClick={() => {
                        if (page > 1) { setPage(page - 1) }
                    }}><AiOutlineArrowLeft></AiOutlineArrowLeft></button>
                </div>
                <div className="products">
                    {products?.map((item) => {
                        return (

                            <ItemCard item={item} key={item.id}></ItemCard>
                        )
                    })}

                </div>
                <div className="pageRight"> <button onClick={() => { setPage(page + 1) }}><AiOutlineArrowRight></AiOutlineArrowRight></button></div>



            </Container>
            {openModal && <Modal close={setOpenModal} />}
        </>
    )
}

export default Home