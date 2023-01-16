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
        buttonLink:"/categories/{{product.categoryId}}"
    },
    {
        buttonTitle: "Valider la commande",
        buttonLink:"/payment"
    },
    {
        buttonTitle: "Payer",
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