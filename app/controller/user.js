'use strict';

const { Controller } = require('egg');

class User extends Controller {
  async index() {
    const { ctx } = this;
    const { userName, passwd } = ctx.query;
    console.log('login with: ', userName, passwd);
    ctx.body = await ctx.service.userControll.userLogin(userName, passwd);
  }
}

module.exports = User;
