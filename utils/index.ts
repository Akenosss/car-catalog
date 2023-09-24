export async function fecthCars() {
    const headers = {
        'X-RapidAPI-Key': '36d65eee45mshf476a00f24c339bp1bcb26jsn4d39e726a5ad',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {headers: headers});

    return await response.json();
}