
import Categoria from "../Models/Categoria.js";
import CategoriasProductos from "../services/CategoriasProductos.js";

class CategoriaController{
  static getAllCategorias = async(req,res) => {
    const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.getAll();
    res.json(categorias);
  }

  static getCategoriaWithProductos=async(req,res)=>{
    const {id}=req.params;
    try {
      const OBJCategoriasProductos=new CategoriasProductos();
      const categoriaWhitProductos=await OBJCategoriasProductos.getCategoriaProductosId(id);
      res.status(201).json(categoriaWhitProductos);
    } catch (error) {
      res.status(500).json({error:error.mensaje});
    }
  }

  static createCategoria = async (req, res) => {
    try {
      const { nombre, descripcion } = req.body;
      const OBJCategoria = new Categoria();
      const categoria = await OBJCategoria.create(nombre, descripcion)
      res.status(201).json(categoria);
    } catch (error) {
      res.status(500).json({error:error.mensaje})
    }
  }

  static actualizarCategoria =async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
      const OBJCategoria = new Categoria()
      const categoria = await OBJCategoria.update(nombre, descripcion,id);
      res.json(categoria);
    } catch (error) {
      res.status(500).json({error:error}.message)
    }
  }

  static actualizarParcialCategoria = async (req, res) => {
    const campos = req.body;
    const { id } = req.params;
    try {
      const OBJCategoria = new Categoria() 
      const categoria = await OBJCategoria.updateParcial(id, campos);
      res.json(categoria);
    } catch (error) {
      res.status(500).json({error:error}.message)
    }
    
  }

  static eliminarCategoria=async (req,res)=>{
    const {id}=req.params;
    try {
      const OBJCategoria=new Categoria();
      const categoria=await OBJCategoria.deleteCategoria(id);
      res.json(categoria);
    } catch (error) {
      res.status(500).json({error:error.message})
    }
  }
}

export default CategoriaController;