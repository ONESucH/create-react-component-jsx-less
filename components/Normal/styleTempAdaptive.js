const common = require('../../common');

const { createClassName } = common;

module.exports = opts => `
@import '../../aliases.less';

/* Ноутбуки устройства */
@media (min-width: 780px) and (max-width: 1200px) {
  
}

/* Планшеты устройства */
@media (min-width: 580px) and (max-width: 779px) {
  
}

/* Мобильные устройства */
@media (min-width: 319px) and (max-width: 579px) {
  
}
`;
