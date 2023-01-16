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
        countries: [{countryName: "Sénégal"},{countryName: "Egypte"},{countryName: "Bénin"},{countryName: "Maroc"},{countryName: "Congo"}]      
    },
    {
        id: 2,
        name: "Amérique du sud",
        image: "assets/images/categories/south amarica.jpg",
        countries: [{countryName: "Mexique"},{countryName: "Colombie"},{countryName: "Panama"},{countryName: "Brésil"}]  
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
        countries: [{countryName: "Irlande"},{countryName: "Écosse"},{countryName: "Allemagne"}]
        
    }
];