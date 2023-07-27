import Usuario from '../models/Usuario.js';
import Transferencia from '../models/Transferencia.js';

Transferencia.belongsTo(Usuario, { foreignKey: 'emisor', foreignKey: 'receptor' });
Usuario.hasMany(Transferencia, { foreignKey: 'emisor', foreignKey: 'receptor' });

export const getUsuarios = async (req, res) => {
    console.log('getUsuarios')
    // const usuarios = await Usuario.findAll({ include: { all: true }});
    const usuarios = await Usuario.findAll();
    res.json({ usuarios: usuarios })
}

export const getUsuario = async (req, res) => {
    console.log('getUsuario')
    const { id } = req.params;

    const usuario = await Usuario.findOne({
        where: {
            id: id
        },
        include: { all: true }
    })
    res.json(usuario)
}

export const postUsuario = async (req, res) => {

    const { body } = req;

    try {
        const existePk_idUsuario = await Usuario.findOne({
            where: {
                id: body.id
            }
        })

        if (existePk_idUsuario) {
            return res.status(400).json({
                msg: `Ya existe el id del usuario ${body.id}`
            })
        }

        const usuario = new Usuario(body)
        await usuario.save();
        res.json(usuario)

    } catch (error) {
        res.status(500).json({
            msg: `${error}`
        })
    }
}

export const putUsuario = async (req, res) => {

    const { body } = req;
    const { id } = req.params;

    try {
        const existePk_idUsuario = await Usuario.findOne({
            where: {
                id: id
            }
        })

        if (!existePk_idUsuario) {
            return res.status(400).json({
                msg: `No existe el id del usuario ${body.id}`
            })
        }

        const usuario = new Usuario(body)
        //actualiza el registro 
        await usuario.save();
        res.json(usuario)

    } catch (error) {
        res.status(500).json({
            msg: `${error}`
        })
    }
}

export const deleteUsuario = async (req, res) => {

    const { body } = req;

    try {
        const existePk_idUsuario = await Usuario.findOne({
            where: {
                id: body.id
            }
        })

        if (!existePk_idUsuario) {
            return res.status(400).json({
                msg: `No existe el id del usuario ${body.id}`
            })
        }

        const usuario = new Usuario(body)
        //eliminar registro
        await usuario.destroy();
        res.json({ 'msg': 'Usuario eliminado' })

    } catch (error) {
        res.status(500).json({
            msg: `${error}`
        })
    }
}