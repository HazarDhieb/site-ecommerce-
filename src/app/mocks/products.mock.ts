export interface Product {
    id: number;
    name: string;
    image: string;
    origin: string;
    color: string;
    size: string;
    price: number;
    description: string;
    entretien : string;
    isAvailable: boolean;
}
export const PRODUCTS: Product [] = [
    {
        id: 1,
        name: "sari",
        image: "",
        origin: "Inde",
        color: "blue",
        size: "3m",
        price: 127.95,
        description: "Sari indien bleu et rose",
        entretien : "laver au pressing",
        isAvailable: true,
    },
    {
        id: 2,
        name: "Jeogori",
        image: "",
        origin: "Chine",
        color: "blue",
        size: "2m",
        price: 124.90,
        description: "Sari indien bleu et rose",
        entretien : "laver au pressing",
        isAvailable: true,
    }
];