const common = require('../../common');

const { createClassName } = common;

module.exports = opts => `
@import '../../librares.global.less';
@import '../../aliases.less';
@import '../../styles.less';
@import './${opts.name}.component.less';
@import './${opts.name}.component.adaptive.less';


`;