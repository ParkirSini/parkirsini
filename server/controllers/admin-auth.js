const { Landlord } = require("../models");
const { compareHash } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

async function processLogin(email, password) {
  const findUser = await Landlord.findOne({
    where: {
      email,
    },
  });
  if (!findUser) throw { name: "DataNotFound" };
  const checkPassword = compareHash(password, findUser.password);
  if (!checkPassword) throw { name: "InvalidUser" };
  const access_token = createToken({
    id: findUser.id,
    email: findUser.email,
    role: findUser.role,
  });

  return access_token;
}

class Auth {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const access_token = await processLogin(email, password);
      res.json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, password, username, phoneNumber, address } = req.body;
      const createUser = await Landlord.create({
        email,
        password,
        username,
        role: "Admin",
        phoneNumber,
        address,
        amount: 0,
      });

      res.status(201).json({
        message: `Create user admin ${createUser.email} success`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Auth;
