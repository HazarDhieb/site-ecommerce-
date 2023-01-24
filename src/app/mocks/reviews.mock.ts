export interface Review {
    id:number;
    reviewText:string;
    reviewerName:string;
    reviewerDescription:string;
    reviewerPhoto:string;
}

export const REVIEWS: Review []=[
    {
        id: 1,
        reviewText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae accusamus nobis voluptatibus dolor iure a inventore? Ipsa nihil mollitia repudiandae, aliquam dolorum non similique architecto ea fuga porro esse.",
        reviewerName:"Sacha",
        reviewerDescription:"passionnée par la culture asiatique",
        reviewerPhoto:"assets/images/home/avatar-one.png"
    },
    {
        id: 2,
        reviewText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae accusamus nobis voluptatibus dolor iure a inventore? Ipsa nihil mollitia repudiandae, aliquam dolorum non similique architecto ea fuga porro esse.",
        reviewerName:"Lionel",
        reviewerDescription:"globe-trotter",
        reviewerPhoto:"assets/images/home/avatar-two.png"
    },
    {
        id: 3,
        reviewText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae accusamus nobis voluptatibus dolor iure a inventore? Ipsa nihil mollitia repudiandae, aliquam dolorum non similique architecto ea fuga porro esse.",
        reviewerName:"Amelia",
        reviewerDescription:"étudiante des cultures sud-américaine",
        reviewerPhoto:"assets/images/home/avatar-three.png"
    }
]