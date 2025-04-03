import connection from "../utils/db.js";

class Producto{
  constructor(nombre,descripcion,precio,categoria_id) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio=precio;
    this.categoria_id=categoria_id;
  }
  /**
   * Metodo para obtener los registros de la base de dato
   * @returns {Array} Listado de los productos en un arreglo
   */
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM productos");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los productos")
    } 
  }

  async create() {
    try {
      const [result] = await connection.query("INSERT INTO productos (nombre,descripcion,precio,categoria_id) values (?,?,?,?)", [this.nombre, this.descripcion,this.precio,this.categoria_id]);
      return {
      id: result.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio:this.precio,
      categoria_id:this.categoria_id
    };
    } catch (error){
      throw new error("Error al crear el producto")
    }
  }

  async update(nombre, descripcion,precio,categoria_id,id) {
    try {
      const [result] = await connection.query("UPDATE productos SET nombre=?,descripcion=?,precio=?,categoria_id=? WHERE id=?", [nombre,descripcion,precio,categoria_id, id]);
      if (result.affectedRows===0) {
        throw new Error("Categoria no encontrada")
      }
      return {id,
        nombre:nombre,
        descripcion:descripcion,
        precio:precio,
        categoria_id:categoria_id
      }
    } catch (error) {
      
    }
  }

  async updateParcial(id, campos) {
    try {
      for (const key in campos) {
        const [result] = await connection.query(`UPDATE productos SET ${key}=? WHERE id=?`, [campos[key], id]);
      }
      
      const [mostrar] = await connection.query("SELECT * FROM productos WHERE id=?",[id])
      return mostrar;
    } catch (error) {
      
    }
  }

  async deleteProducto(id){
    try {
      
      const [result]=await connection.query("DELETE FROM productos WHERE id=?",[id]);
      return result;
    } catch (error) {
      
    }
  }
}

export default Producto;