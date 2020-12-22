async function getJson(url) {
    const res = await fetch(url);
    return await res.json();
}

export const getMeatPizza = getJson('http://my-json-server.typicode.com/vasilisk110/pizzas/meatPizza');
export const getFirmaPizza = getJson('http://my-json-server.typicode.com/vasilisk110/pizzas/firmaPizza');
export const getPremiumPizza = getJson('http://my-json-server.typicode.com/vasilisk110/pizzas/premiumPizza');
