import { Categoria } from '../interfaces/categorias';
export const CATEGORIAS: Categoria[] = [
    {
        nombre:'Hamburguesas',
        id:7,
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYVTUxCVSRMQ7lK67GMqDxQT_CERSJL09RA&usqp=CAU',
        productos: [{
            id:1,
            nombre:'Hamburguesas   bacon and cheddar con  papas fritas',
            precio: 2500,
            ingredientes: ["Doble carne","Panceta","Chedar"],
            imagen: "https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg"
        }
         ,{
            id:2,
            nombre: 'Hamburguesa de pollo con papa fritas',
            precio:  3500,
            ingredientes:["Hamburguesa", "Lechuga","Salsa Tasty"],
            imagen:"https://hips.hearstapps.com/hmg-prod/images/popeyes-one-sandwich-1580223418.jpg?crop=1.00xw:0.756xh;0,0.178xh&resize=640:*"
         }
    ]
        },
    {
        nombre:'Pizzas', 
        id:1, 
        imgUrl:'https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg?w=1920&h=1281&fl=progressive&q=50&fm=jpg', 
        productos: [{
            id:3,
            nombre: 'Pizza Margarita',
            precio: 2000,
            ingredientes:["mozzarella", "albahaca fresca", "sal" , "aceite"],
            imagen: "https://cdn.colombia.com/gastronomia/2011/08/25/pizza-margarita-3684.jpg"
        }
        ,{
            id:4,
            nombre:'Pizza 4 quesos',
            precio: 2100,
            ingredientes:["Queso roquefort","parmesano","fondina", "mozzarella"],
            imagen:"https://assets.unileversolutions.com/recipes-v2/216503.jpg"
        }
        ]
    },
    {
        nombre:'Postres', 
        id:3, 
        imgUrl:'https://media.admagazine.com/photos/618a6744b94700461d621432/master/w_1600%2Cc_limit/67788.jpg', 
        productos: [{
            id:5,
            nombre: 'Tofi',
            precio: 1000,
            ingredientes:["Dulce de leche", "masa sable","Chocolate amargo"],
            imagen:"https://lacocinadelolidominguez.es/wp-content/uploads/2021/05/TARTA-TOFI-BLOG.jpg"
        }
    ,{id:90,
    nombre: 'Postre oreo',
    precio: 1000,
    ingredientes:["Dulce de leche", "Galletitas oreos trozadas", "Crema batida"],
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOmc-MF4TiVxYeo675aeRwyLfjmnkZ1u60Q&usqp=CAU"

    }
    ]
    },
    {
        nombre:'Bebidas', 
        id:4, 
        imgUrl:'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/im_landscape_100/public/2022-05/bebidas-refrescantes-sin-alcohol%C2%A9iStock.jpg.webp?itok=474pDi5b', 
        productos: [{
            id:6,
            nombre:'Gin Tonic con menta',
            precio: 1000,
            ingredientes:["Gin tonic", "menta"],
            imagen:"https://soloporgusto.com/wp-content/uploads/2020/06/inv-cinco.jpg"
        }]
    },
]