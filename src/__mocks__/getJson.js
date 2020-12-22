async function getMeatPizza() {
    return [
        {
            id: 11,
            name: 'Margarita',
            img: 'images/pizza.png',
            price: 20.19,
            sizes: ['100g', '530g', '860g'],
            description: 'Deskription of pizza',
        },
        {
            id: 12,
            name: 'Calabresa',
            img: 'images/pizza2.png',
            price: 18,
            sizes: ['320g', '530g', '860g'],
            description: 'Deskription of pizza',
        },
    ];
}

async function getFirmaPizza() {
    return [
        {
            id: 21,
            name: 'Margarita',
            img: 'images/pizza.png',
            price: 20.19,
            sizes: ['100g', '530g', '860g'],
            description: 'Deskription of pizza',
        },
        {
            id: 22,
            name: 'Calabresa',
            img: 'images/pizza2.png',
            price: 18,
            sizes: ['320g', '530g', '860g'],
            description: 'Deskription of pizza',
        },
    ];
}

async function getPremiumPizza() {
    return [
        {
            id: 31,
            name: 'Margarita',
            img: 'images/pizza.png',
            price: 20.19,
            sizes: ['100g', '530g', '860g'],
            description: 'Deskription of pizza',
        },
        {
            id: 32,
            name: 'Calabresa',
            img: 'images/pizza2.png',
            price: 18,
            sizes: ['320g', '530g', '860g'],
            description: 'Deskription of pizza',
        },
    ];
}

export const json1 = getMeatPizza();
export const json2 = getFirmaPizza();
export const json3 = getPremiumPizza();