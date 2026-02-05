import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url);

export class Database {
  #database: Record<string, any[]> = {};

  constructor() {
    fs.readFile(databasePath, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  async #persist() {
    await fs.writeFile(databasePath, JSON.stringify(this.#database, null, 2));
  }
}
//TODO: criar os metodos do database => insert, select, update e delete
