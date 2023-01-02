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
    isVisible: boolean;
    categoryId: number;
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
        isVisible: true,
        categoryId: 3
    }
];