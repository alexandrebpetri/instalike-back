import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições
    app.use(express.json());
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
}

export default routes;