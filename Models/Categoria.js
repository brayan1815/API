import connection from "../utils/db.js";

class Categoria{
/**
   * Metodo para obtener los registros de la base de dato
   * @returns {Array} Listado de las categorias de un arreglo
   */
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las categorias")
    } 
  }

  async create(nombre,descipcion) {
    try {
      const [result] = await connection.query("INSERT INTO categorias (nombre,descripcion) values (?,?)", [nombre,descripcion]);
      return {
      id: result.id,
      nombre: nombre,
      descripcion: descripcion
    };
    } catch (error){
      throw new error("Error al crear la categoria")
    }
  }

  async update(nombre, descripcion,id) {
    try {
      const [result] = await connection.query("UPDATE categorias SET nombre=?,descripcion=? WHERE id=?", [nombre,descripcion, id]);
      if (result.affectedRows===0) {
        throw new Error("Categoria no encontrada")
      }
      return {id,nombre:nombre,descripcion:descripcion}
    } catch (error) {
      
    }
    // console.log(this.nombre, this.descripcion);
  }

  async updateParcial(id, campos) {
    try {
      for (const key in campos) {
        const [result] = await connection.query(`UPDATE categorias SET ${key}=? WHERE id=?`, [campos[key], id]);
      }
      
      const [mostrar] = await connection.query("SELECT * FROM categorias WHERE id=?",[id])
      return mostrar;
    } catch (error) {
      
    }
  }
}

export default Categoria;