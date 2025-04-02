export const validarCategoria = (req,res) => {
  const {nombre,descipcion } = req.body;
  
  if (nombre.trim()=="" || !nombre) {
    return res.status(400).json({ mensaje: "El nombre en la categoria es obligatorio" });   
  }
  if (descipcion.trim()=="" || !descripcion) {
    return res.status(400).json({ mensaje: "la descripcion en la categoria es obligatorio" });   
  }
  next();
}