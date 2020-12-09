'use strict';

const Controller = require('egg').Controller;

class HelloController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.helloServer.sayHello();
  }
}

module.exports = HelloController;
