export const getFavStorage = () => {
    const localData = localStorage.getItem("favorites");
    return localData ? JSON.parse(localData) : [];
}

export const setFavStorage = (odontologo) => {
    let storageFavs = getFavStorage();
    if (storageFavs.some(e => e.id === odontologo.id)) {
        const storageFavsAux = storageFavs.filter(fav => fav.id !== odontologo.id)
        localStorage.setItem("favorites", JSON.stringify(storageFavsAux))  
    }
    else {
        storageFavs.push(odontologo)
        localStorage.setItem("favorites", JSON.stringify(storageFavs))   
    }
}

export const isFav = (odontologo) => getFavStorage() ? (getFavStorage().some(e => e.id === odontologo.id) ? true : false) : false 


