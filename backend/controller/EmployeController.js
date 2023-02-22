const EmployeModel = require("../models/EmployeModel");


class EmployeController {
    static async index(req, res) {
        try {
            const data = await EmployeModel.findAll();

            return res.json({
                message: "Data berhasil ditampilkan",
                data
            })

        } catch (m) {
            return res.json({ message: m })
        }

    }
    static async find(req, res) {
        try {
            const data = await EmployeModel.findOne({
                where: {
                    id_employe: req.params.id
                }
            });
            if (data == null) {
                res.status(404).json({ message: "Data tidak ditemukan" })
            } else {
                res.json({
                    message: "Data berhasil ditampilkan",
                    data
                })
            }

        } catch (m) {
            return res.json({ message: m })
        }

    }
    static async store(req, res) {
        try {
            await EmployeModel.create({
                name_employe: req.body.name_employe,
                salary_employe: req.body.salary_employe
            })
            res.json({
                message: "Data berhasil ditambahkan"
            })
        } catch (m) {
            res.json({ message: m })
        }
    }
    static async update(req, res) {
        try {
            await EmployeModel.update({
                name_employe: req.body.name_employe,
                salary_employe: req.body.salary_employe
            }, {
                where: {
                    id_employe: req.params.id
                }
            })
            res.json({
                message: "Data berhasil diperbarui"
            })
        } catch (m) {
            res.json({
                message: m
            })
        }
    }
    static async destroy(req, res) {
        try {
            await EmployeModel.destroy({
                where: {
                    id_employe: req.params.id
                }
            })
            res.json({
                message: "Data berhasil dihapus"
            })
        } catch (m) {
            res.json({ message: m })

        }

    }
}

module.exports = EmployeController;