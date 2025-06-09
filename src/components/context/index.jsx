import { createContext,useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const [userDetail,setUserDetail] = useState({
        name:'',
        email:'',
        password:''
    })

    const [showSidebar,setShowSidebar] = useState(false)
    const [loading,setLoading] = useState(false)
    const [itemList,setItemList] = useState([])
    const [filteredItemList, setFilteredItemList] = useState([]);

    async function fetchProduct(){
      try{
        setLoading(true)
        const res = await fetch(`https://fakestoreapi.com/products`)
        const data = await res.json()
        console.log(data);

        if(data){
          setLoading(false)
          setItemList(data)
          setFilteredItemList(data)
        }

      }catch(e){
        console.log(e);
        setLoading(false)
      }
    }

    
    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar)
        console.log('toggle clicked');
        console.log();
    }


    return (
        <GlobalContext.Provider
          value={{
            setUserDetail,
            userDetail,
            handleToggleSidebar,
            showSidebar,
            fetchProduct,
            itemList,
            loading,
            filteredItemList,
            setFilteredItemList
          }}
        >
        {children}
        </GlobalContext.Provider>
    )
}