import { useContext, useEffect } from "react"
import { GlobalContext } from "../context"
import { NavLink } from "react-router-dom"
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";


export default function ProductPage(){

    const {fetchProduct,recipeList,loading} = useContext(GlobalContext)

    const { cart } = useSelector((state) => state);

    useEffect(() => {
        fetchProduct()
    },[])

    if(loading) {
        return <div className="h-lvh flex items-center justify-center">
            <h1 className="font-bold text-3xl">Data Loading please wait..</h1>
        </div> 
    }


    return (
        <div>
            <header className="shadow shadow-gray-600 p-4 flex  items-center justify-between">
                <NavLink to='/dashboard' className='font-bold text-2xl '>Dashboard</NavLink>
                <h1 className='font-bold text-2xl'>Product Page</h1>
                <div className="flex pr-10">
                    <NavLink to="/cart" className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faShoppingCart} size="3x" />
                    </NavLink>
                    <span className="font-bold text-2xl mt-[-10px]">{cart.length}</span>
                </div>
            </header>
            <div className="flex flex-wrap justify-center">
                {
                    recipeList && recipeList.length && recipeList.map((item) => (
                        <ProductCard key={item.id} data={item} />
                    ))
                }
            </div>
        </div>
    )
}