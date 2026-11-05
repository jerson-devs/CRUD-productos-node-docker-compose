const Producto = require("./../models/Producto");

async function listar(req, res) {
    try {
        const productos = await Producto.findAll();
        return res.json(productos);
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al listar productos", error: error.message });
    }
}

async function guardar(req, res) {
    try {
        const producto = await Producto.create(req.body);
        return res.status(201).json({ mensaje: "Producto registrado", producto });
    } catch (error) {
        return res.status(400).json({ mensaje: "Error al registrar producto", error: error.message });
    }
}

async function mostrar(req, res) {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        return res.json(producto);
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al mostrar producto", error: error.message });
    }
}

async function modificar(req, res) {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        await producto.update(req.body);
        return res.json({ mensaje: "Producto modificado", producto });
    } catch (error) {
        return res.status(400).json({ mensaje: "Error al modificar producto", error: error.message });
    }
}

async function eliminar(req, res) {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        await producto.destroy();
        return res.json({ mensaje: "Producto eliminado" });
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al eliminar producto", error: error.message });
    }
}

module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar
}
