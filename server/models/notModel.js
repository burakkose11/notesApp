const db = require("../db");

class Not {
  static async create(data) {
    const sql = `
        INSERT INTO notlar (baslik,icerik,tarih)
        VALUES (?, ?, NOW())
        `;
    const [result] = await db.query(sql, [data.baslik, data.icerik]);
    return { id: result.insertId, ...data };
  }

  static async getAll() {
    const sql = "SELECT * FROM notlar ORDER BY tarih DESC";
    const [rows] = await db.query(sql);
    return rows;
  }

  static async getById(id) {
    const sql = "SELECT * FROM notlar WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows[0];
  }

  static async update(id, data) {
    const sql = `UPDATE notlar
    SET baslik = ?, icerik = ?, tarih = NOW()
    WHERE id = ?
    `;

    const [result] = await db.query(sql, [data.baslik, data.icerik, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const sql = `DELETE FROM notlar WHERE id = ?`;
    const [result] = await db.query(sql, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Not;
