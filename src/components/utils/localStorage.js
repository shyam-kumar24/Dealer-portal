
export const loadCartFromLocalStorage = () => {
    try{
        const serializedCart = localStorage.getItem('cart')
        return serializedCart ? JSON.parse(serializedCart) : []
    }catch(e){
        console.log('failed to load cart from localStorage',e);
        return []
    }
}

export const saveCartToLocalStorage = (cart) => {
    try{
        const serializedCart = JSON.stringify(cart)
        localStorage.setItem('cart', serializedCart)
    }catch(e){
        console.warn("Failed to save cart to localStorage", e);
    }
}


export const loadItemCountFromLocalStorage = () => {
    try{
        const itemCount = localStorage.getItem('itemCount');
        return itemCount ? JSON.parse(itemCount) : {};
    }catch {
        return {};
    }
}

export const saveItemCountToLocalStorage = (itemCount) => {
    try{
        localStorage.setItem('itemCount', JSON.stringify(itemCount || {}));
    }catch {
        console.warn("Failed to save itemCount to localStorage");
    }
}