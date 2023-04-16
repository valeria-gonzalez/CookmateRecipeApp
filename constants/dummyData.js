import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        price: "$35.00",
        serving: 1,
        isSaved: false,
        category: "Lunch",
        description: "Spaghetti with Shrimp Sauce is a delicious and easy to make pasta dish. It is a perfect meal for a busy weeknight.",
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ],

        directions: [
            'Cut chicken into 2 cm (3/4 in.) cubes, and onion into 1.5 cm (1/2 in.) cubes. Defrost mixed vegetables with boiling water, and then drain.',
            'Heat 2 Tbsp of salad oil in wok, and saute chicken. When cooked through, add onions and cook until translucent. Add and mix with tomato ketchup.',
            'Add salt and pepper to (2) and saute. Then add rice and cook while loosening. Add and stir in mixed vegetables, then serve on plates.',
            'Beat egg (A), and add salt and pepper to make egg mixture. Heat 1 Tbsp of salad oil in wok, pour in egg mixture, and make scrambled eggs by quickly stirring together. Place on top of (3).',
        ],
    },
    {
        id: 2,
        name: "Malaysian Chicken Satay",
        image: images.satay,
        price: "$90.00",
        serving: 10,
        isSaved: true,
        category: "Dinner",
        description: "Malaysian Chicken Satay is a delicious and easy to make pasta dish. It is a perfect meal for a busy weeknight.",
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],

        directions: [
            'Cut chicken into 2 cm (3/4 in.) cubes, and onion into 1.5 cm (1/2 in.) cubes. Defrost mixed vegetables with boiling water, and then drain.',
            'Heat 2 Tbsp of salad oil in wok, and saute chicken. When cooked through, add onions and cook until translucent. Add and mix with tomato ketchup.',
            'Add salt and pepper to (2) and saute. Then add rice and cook while loosening. Add and stir in mixed vegetables, then serve on plates.',
            'Beat egg (A), and add salt and pepper to make egg mixture. Heat 1 Tbsp of salad oil in wok, pour in egg mixture, and make scrambled eggs by quickly stirring together. Place on top of (3).',
        ],
    },
    {
        id: 3,
        name: "Sarawak Laksa",
        image: images.laksa,
        price: "$40.00",
        serving: 1,
        isSaved: true,
        category: "Breakfast",
        description: "Sarawak Laksa is a delicious and easy to make pasta dish. It is a perfect meal for a busy weeknight.",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },

        ],

        directions: [
            'Cut chicken into 2 cm (3/4 in.) cubes, and onion into 1.5 cm (1/2 in.) cubes. Defrost mixed vegetables with boiling water, and then drain.',
            'Heat 2 Tbsp of salad oil in wok, and saute chicken. When cooked through, add onions and cook until translucent. Add and mix with tomato ketchup.',
            'Add salt and pepper to (2) and saute. Then add rice and cook while loosening. Add and stir in mixed vegetables, then serve on plates.',
            'Beat egg (A), and add salt and pepper to make egg mixture. Heat 1 Tbsp of salad oil in wok, pour in egg mixture, and make scrambled eggs by quickly stirring together. Place on top of (3).',
        ],
    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: images.nasiLemak,
        price: "$210.00",
        serving: 10,
        isSaved: true,
        category: "Lunch",
        description: "Nasi Lemak is a delicious and easy to make pasta dish. It is a perfect meal for a busy weeknight.",
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },

        ],

        directions: [
            'Cut chicken into 2 cm (3/4 in.) cubes, and onion into 1.5 cm (1/2 in.) cubes. Defrost mixed vegetables with boiling water, and then drain.',
            'Heat 2 Tbsp of salad oil in wok, and saute chicken. When cooked through, add onions and cook until translucent. Add and mix with tomato ketchup.',
            'Add salt and pepper to (2) and saute. Then add rice and cook while loosening. Add and stir in mixed vegetables, then serve on plates.',
            'Beat egg (A), and add salt and pepper to make egg mixture. Heat 1 Tbsp of salad oil in wok, pour in egg mixture, and make scrambled eggs by quickly stirring together. Place on top of (3).',
        ],
    },

]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}