export interface Country {
    countryName: string;
}
export interface Category {
    id: number;
    name: string;
    image: string;
    countries: Country[];
    
}

export const CATEGORIES: Category[] = [
    {
        id: 1,
        name: "Afrique",
        image: "assets/images/categories/afrique.jpg",
        countries: [{countryName: "Tchad"},{countryName: "Nigeria"},{countryName: "Kenya"},{countryName: "Soudan"},{countryName: "Ethiopie"}]      
    },
    {
        id: 2,
        name: "Amérique du sud",
        image: "assets/images/categories/south amarica.jpg",
        countries: [{countryName: "Mexique"},{countryName: "Guatemala"},{countryName: "Venezuela"},{countryName: "Colombie"},{countryName: "Pérou"}]  
    },
    {
        id: 3,
        name: "Asie",
        image: "assets/images/categories/asie.jpg",
        countries: [{countryName: "Corée"},{countryName: "Chine"},{countryName: "Inde"},{countryName: "Japon"},{countryName: "Mongolie"}]      
    },
    {
        id: 4,
        name: "Europe",
        image: "assets/images/categories/Europe.jpg",
        countries: [{countryName: "Ukraine"},{countryName: "Bulgarie"},{countryName: "Albanie"},{countryName: "Roumanie"}]
        
    }
];