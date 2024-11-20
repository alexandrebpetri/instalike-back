import express from "express";

const posts = [
    { id: 1, descrição: "Uma foto teste", imagem: "https://placecats.com/millie/300/150"},
    { id: 2, descrição: "Gato fofo dormindo", imagem: "https://placecats.com/millie/300/150"},
    { id: 3, descrição: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post)=> {
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});