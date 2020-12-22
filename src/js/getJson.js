async function getJson(url) {
    const res = await fetch(url);
    return await res.json();
}

export const getMeatPizza = getJson('https://my-json-server.typicode.com/vasilisk110/pizzas/meatPizza');
export const getFirmaPizza = getJson('https://my-json-server.typicode.com/vasilisk110/pizzas/firmaPizza');
export const getPremiumPizza = getJson('https://my-json-server.typicode.com/vasilisk110/pizzas/premiumPizza');
