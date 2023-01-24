export interface Service {
    id: number;
    icon: string;
    title: string;
    description: string
}

export const SERVICE: Service[] = [
    {
        id: 1,
        icon: "fas fa-light fa-truck-fast",
        title: "expédition rapide",
        description: "Après avoir passé commande, l'expédition de votre commande se fait sous 2 à 3 jours ouvrés"
    },
    {
        id: 2,
        icon: "fas fa-light fa-headset",
        title: "service client",
        description: "Notre service client est à votre écoute 5 jours sur 7 pour toute demande d'information"
    },
    {
        id: 3,
        icon: "fas fa-light fa-credit-card",
        title: "paiement sécurisé",
        description: "Le paiement de votre commande est sécurisé"
    }
]