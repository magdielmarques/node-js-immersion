const BaseRoute = require("./base/baseRoute");

class GuitarRoute extends BaseRoute {
  constructor(db) {
    super();
    this.db = db;
  }

  list() {
    return {
      path: "/guitar",
      method: "GET",
      handler: (req, headers) => {
        try {
          const { skip, limit, brand } = req.query;
          let query = {};
          if (brand) query.brand = brand;
          if (isNaN(skip)) throw Error("O tipo do skip é incorreto");
          if (isNaN(limit)) throw Error("O tipo do limit é incorreto");

          return this.db.read(query, parseInt(skip), parseInt(limit));
        } catch (error) {
          console.log("Error -> \n", error);
          return "Erro interno no servidor";
        }
      },
    };
  }
}

module.exports = GuitarRoute;
