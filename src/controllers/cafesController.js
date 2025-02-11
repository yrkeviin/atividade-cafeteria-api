const listarCafes = (req, res) => {
    res.json(listaCafes.listarCafes());
}

const addCafe = (req, res) => {
    const { cliente, pedido, valor } = req.body;
    if (!cliente || !pedido || !valor) {
        return res.status(400).json({ erro: "Cliente, pedido e valor são obrigatórios." });
    }
    const novoCafe = listaCafes.addCafe(cliente, pedido, valor);
    res.status(201).json(novoCafe);
}

const buscarCafe = (req, res) => {
    const cafe = listaCafes.buscarCafe(parseInt(req.params.id));
    if(!cafe) {
        return res.status(404).json({ erro: "Café não encontrado." });
    }
    res.json(cafe);
}

const deletarCafe = (req, res) => {
    const cafeRemovido = listaCafes.deletarCafe(parseInt(req.params.id));
    if(!cafeRemovido) {
        return res.status(404).json({ erro: "Café não encontrado." });
    }
    res.json({ mensagem: "Café removido com sucesso." });
}

module.exports = { listarCafes, addCafe, buscarCafe, deletarCafe };
