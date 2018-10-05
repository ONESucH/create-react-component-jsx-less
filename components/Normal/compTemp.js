const common = require('../../common');

const { createComponentName, createClassName } = common;

const create = ({compName = '', className = '', low = false, page = false, name = '' } = {}) => `
/* Модули */
import React from 'react';

/* Стили */
import './${compName}.component.less';

export default class ${compName}Component extends React.Component {
    render() {
        return (
            <div className="app-${compName}">${compName} component loaded!</div>
        )
    }
}
`;

module.exports = (opts) => {
  const compName = createComponentName(opts);
  const className = createClassName(opts);

  const res = Object.assign({ compName, className }, opts);

  return create(res);
};
