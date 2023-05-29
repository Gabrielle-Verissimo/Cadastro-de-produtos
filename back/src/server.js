const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const app = express();
const prisma = new PrismaClient();

// app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/lista-produtos', async (req, res) => {
    const products = await prisma.products.findMany({
        select: {
            id: true,
            name: true,
            value: true
        },
        orderBy: {
            value: 'asc'
        }
    })
    return res.json(products);
})

app.post('/cadastrar-produto', async (req, res) => {
    const body = req.body;
    const product = await prisma.products.create({
        data: {
            name: body.name,
            description: body.description,
            value: body.value,
            disponible: body.disponible
        }
    })
    return res.status(201).json(product);
});

app.listen(3000, () => {
    console.log('Executando...');
    console.log('Acessar http://localhost:3000/lista-produtos');
})