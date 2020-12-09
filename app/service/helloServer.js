'use strict';

const Service = require('egg').Service;

class Hello extends Service {
  async sayHello() {
    const res = await this.ctx.curl('http://10.11.81.62/api/', { dataType: 'json' });
    console.log(res.data);
    return res.data;
  }
}

module.exports = Hello;
