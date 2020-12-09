'use strict';

const { Service } = require('egg');

class UserController extends Service {
  async userLogin(userName, passwd) {
    const { ctx, config } = this;
    const res = await ctx.curl(`${config.baseUrl}userlogin`, {
      method: 'POST',
      contentType: 'json',
      data: {
        name: userName,
        password: passwd,
      },
      dataType: 'json',
    });
    console.log(res.data);
    return res.data;
  }
}

module.exports = UserController;
