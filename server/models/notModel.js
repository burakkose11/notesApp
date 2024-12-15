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
}

module.exports = Not;
