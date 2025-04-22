import Categoria from "../Models/Categoria.js";
import Producto from "../Models/Producto.js";

class CategoriasProductos{
    categorias;
    productos;

    constructor(){
       this.categorias=new Categoria;
       this.productos=new Producto;
    }

    async getCategoriaProductosId(id){
        const categorias=await this.categorias.getId(id);
        const productos=await this.productos.getForCategoria(id);
        categorias[0].productos=productos;
        // let res={ categorias};
        // res.productos=productos;
        return categorias;
    }
}
export default CategoriasProductos;