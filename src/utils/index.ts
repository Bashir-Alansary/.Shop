import { ItemType } from "@/types";

export const fetchData = async() => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}

export const fetchDataById = async(id: number) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
}

 /* apply discount function */
 export const applyDiscount = (num:number, discountNum:number): number => {
    return parseFloat((num - (discountNum/100)*num).toFixed(2));
 }

 /* dropdown sort function */
 const handleDropdownSort = (val:string, list: ItemType[]) => {
    if (val === "Featured") {
        const sortedItemsList: ItemType[] = [...list].sort((a, b) => {
            return a.id - b.id;
        });
        return sortedItemsList;
    }
    else if (val === "Best selling") {
        const sortedItemsList: ItemType[] = [...list].sort((a, b) => {
            return b.discountPercentage - a.discountPercentage;
        });
        return sortedItemsList;
    }
    else if (val === "Alphabetically, A-Z") {
        const sortedItemsList: ItemType[] = [...list].sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        return sortedItemsList;
    }
    else if (val === "Alphabetically, Z-A") {
        const sortedItemsList: ItemType[] = [...list].sort((a, b) => {
            return b.title.localeCompare(a.title);
        });
        return sortedItemsList;
    }
    else if (val === "Price, low to high") {
        const sortedItemsList: ItemType[] = [...list].sort((a, b) => {
            return a.price - b.price;
        });
        return sortedItemsList;
    }
    else if (val === "Price, high to low") {
        const sortedItemsList: ItemType[] = [...list].sort((a, b) => {
            return b.price - a.price;
        });
        return sortedItemsList;
    }
    else if (val === "Date, old to new") {
        const sortedItemsList: ItemType[] = [...list].sort((a, b) => {
            return a.id - b.id;
        });
        return sortedItemsList;
    }
    else if (val === "Date, new to old") {
        const sortedItemsList: ItemType[] = [...list].sort((a, b) => {
            return b.id - a.id;
        });
        return sortedItemsList;
    }
    
}