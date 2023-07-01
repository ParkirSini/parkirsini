const { Landlord } = require("../models");
const { verifyToken } = require("../helpers/jwt");

async function adminAuthentication(req, res, next) {
  try {
    let { access_token } = req.headers;
    if (!access_token) throw { name: "Unauthenticated" };
    const payload = verifyToken(access_token);
    const admin = await Landlord.findByPk(payload.id);
    if (!admin) throw { name: "Unauthenticated" };
    req.user = {
      id: admin.id,
      email: admin.email,
      username: admin.username,
      role: admin.role,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { adminAuthentication };
