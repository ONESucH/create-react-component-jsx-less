const common = require('../../common');

const { createComponentName } = common;

const create = ({ compName } = {}) => `
import './${compName}.less';
import ${compName} from './${compName}';

export default ${compName};
`;

module.exports = (opts) => {
  const compName = createComponentName(opts);

  return create({ compName });
};
