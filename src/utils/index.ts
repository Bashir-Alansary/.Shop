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

