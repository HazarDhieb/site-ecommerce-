import { AppRoutingModule } from "../app-routing.module";

export interface Color {
colorName: string;
colorCode: string;
}
export interface Product {
    id: number;
    name: string;
    image: string;
    origin: string;
    colors: Color[];
    size: string;
    price: number;
    description: string;
    entretien : string;
    isAvailable: boolean;
    isVisible:boolean;
    categoryId: number;

}
export const PRODUCTS: Product [] = [
    {
        id: 1,
        name: "Sari",
        image: "assets/images/asian_products/sari-purple.png",
        origin: "Inde",
        colors: [{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"bleu", colorCode:"#0000ff"},{colorName:"jaune", colorCode:"#ffff00"}],
        size: "3m",
        price: 127.95,
        description: "Sari indien bleu et rose",
        entretien : "laver au pressing",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
    
    },
    {
        id: 2,
        name: "Hanfu Royal",
        image: "assets/images/asian_products/china-Etsy.png",
        origin: "Chine",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "3m",
        price: 294.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
    {
        id: 3,
        name: "Hanbok",
        image: "assets/images/asian_products/koria-Hanbok.png",
        origin: "Coréé",
        colors: [{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"blanc", colorCode:"#FFFFFF"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "2m",
        price: 169.00,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
    {
        id: 4,
        name: "Jeogori",
        image: "assets/images/asian_products/korian-jeogori.png",
        origin: "Coréé",
        colors: [{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"bleu", colorCode:"#0000ff"},{colorName:"jaune", colorCode:"#ffff00"}],
        size: "2m",
        price: 144.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
    {
        id: 5,
        name: "Hanfu Classique",
        image: "assets/images/asian_products/china-Hanfu.png",
        origin: "Chine",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "3m",
        price: 123.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
    {
        id: 6,
        name: "Hanfu Tang",
        image: "assets/images/asian_products/china-hanfu tang.png",
        origin: "Chine",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "3m",
        price: 95.70,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
    },
    {
        id: 7,
        name: "Folk Attire",
        image: "assets/images/asian_products/idian-Attire.png",
        origin: "Inde",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "3m",
        price: 195.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
    {
        id: 8,
        name: "Lehenga",
        image: "assets/images/asian_products/india-lehenga.png",
        origin: "Inde",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "3m",
        price: 150.00,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
    {
        id: 9,
        name: "Hakama",
        image: "assets/images/asian_products/japan-hakama.png",
        origin: "Japon",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "2m",
        price: 89.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
    {
        id: 10,
        name: "Folk Kimono",
        image: "assets/images/asian_products/japan-kimono.png",
        origin: "Japon",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "2m",
        price: 95.55,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
    {
        id: 11,
        name: "Yukata",
        image: "assets/images/asian_products/japan-yukata.png",
        origin: "Japon",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "2m",
        price: 85.70,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
    {
        id: 12,
        name: "Folk Noir",
        image: "assets/images/asian_products/mangole-1 1.png",
        origin: "Mangolie",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "2m",
        price: 85.50,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
    },
    {
        id: 13,
        name: "Folk Bleu",
        image: "assets/images/asian_products/mangole-2.png",
        origin: "Mangolie",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "2m",
        price: 85.50,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
    },
    {
        id: 14,
        name: "Folk Terkwaz",
        image: "assets/images/asian_products/mangole-3.png",
        origin: "Mangolie",
        colors:[{colorName:"Rouge", colorCode:"#ff0000"},{colorName:"Or", colorCode:"#ffd700"},{colorName:"Rouge", colorCode:"#ff0000"}],
        size: "2m",
        price: 99.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        entretien : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum qui optio eum, quaerat nisi enim ratione nesciunt voluptates accusamus.",
        isAvailable: true,
        isVisible:true,
        categoryId: 3,
       
    },
];