const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Utilizzaimo la base dati fornita e anche il codce HTML/CSS
// - Gli oggetti nell’array di oggetti rappresentano tutti i post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// - Stampiamo i post del nostro feed.
// - Sotto al nome NON inseire il calcolo della data (es 4 mesi fa) ma la data i formato italiano (GG/MM/AAAA)




// CICLO FOR PER PRENDERE TUTTE LE INFO CHE MI SERVONO
for(let i = 0; i < posts.length; i++){
    // intero array di object
    const singlePosts = posts[i];
    console.log(singlePosts);
    // id post
    const idPost = singlePosts.id;
    console.log(idPost);
    // testo post
    const textPost = singlePosts.content;
    console.log(textPost);
    // image post
    const imagePost = singlePosts.media;
    console.log(imagePost);

    // author post
    // author's name
    const authorNamePost = singlePosts.author.name;
    console.log(authorNamePost);
    // author's image post
    const authorImagePost = singlePosts.author.image;
    console.log(authorImagePost);

    // likes post
    const likePost = singlePosts.likes;
    console.log(likePost);
    // data creazione
    const datePost = singlePosts.created;
    console.log(datePost);

}