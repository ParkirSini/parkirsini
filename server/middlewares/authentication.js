const { Customer, Landlord } = require("../models");
const { verifyToken } = require("../helpers/jwt");

async function authenticationCustomer(req, res, next) {
  try {
    let { access_token } = req.headers;
    if (!access_token) throw { name: "Unauthenticated" };

    let payload = verifyToken(access_token);

    let customer = await Customer.findByPk(payload.id);
    if (!customer) throw { name: "Unauthenticated" };

    req.customer = {
      id: customer.id,
    };

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function authenticationLandlord(req, res, next) {
  try {
    let { access_token } = req.headers;
    if (!access_token) throw { name: "Unauthenticated" };

    let payload = verifyToken(access_token);

    let landlord = await Landlord.findByPk(payload.id);
    if (!landlord) throw { name: "Unauthenticated" };

    req.landlord = {
      id: landlord.id,
    };

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {authenticationCustomer, authenticationLandlord}