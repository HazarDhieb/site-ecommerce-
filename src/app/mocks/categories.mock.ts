export interface Category {
    id: number;
    name: string;
    image: string;
    
}

export const CATEGORIES: Category[] = [
    {
        id: 1,
        name: "Afrique",
        image: "assets/images/categories/afrique.jpg",
        
    },
    {
        id: 2,
        name: "Amérique du sud",
        image: "assets/images/categories/south amarica.jpg",
        
    },
    {
        id: 3,
        name: "Asie",
        image: "assets/images/categories/asie.jpg",
        
    },
    {
        id: 4,
        name: "Europe",
        image: "assets/images/categories/Europe.jpg",
        
    }
];