/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Products() {
    const { id } = useParams()

    const url = "http://localhost:3000/products/" + id
    const { data: product, loading, error } = useFetch(url)

    return (
        <>
            <p>ID DO PRODUT: {id}</p>
            {error && <p>Ocorreu um erro inesperado</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R$ {product.price}</p>
                </div>
            )}
        </>
    )
}
