export interface Button {
    buttonTitle: string;
    buttonLink: string;
}

export const BUTTON: Button[] = [

    {
        buttonTitle: "Ajouter au panier",
        buttonLink: "/cart"
    },
    {
        buttonTitle: "Voir plus",
        buttonLink:"/products"
    },
    {
        buttonTitle: "Valider la commande",
        buttonLink:"/payment"
    },
    {
        buttonTitle: "Valider",
        buttonLink:"/payment-success"
    },
    {
        buttonTitle: "Annuler",
        buttonLink:"/cart"
    },
    {
        buttonTitle: "Je m'inscris",
        buttonLink:"/"
    },
]