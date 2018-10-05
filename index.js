#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const changeCase = require("change-case");
const program = require("commander");

const components = require('./components');
const common = require('./common');

const { createComponentName, clearLine } = common;
const { Normal } = components;

function wirte(path, code) {
  fs.writeSync(fs.openSync(path, "w"), clearLine(code));
}

function getOpts(name = '', parentName = '', cmd = {}) {
  return Object.assign({
    name,
    parentName,
  }, cmd);
}

function createComp(opts = {}) {
  const name = createComponentName(opts);
  const { single } = opts;

  const Comp = components[name];
  const res = Object.assign({}, Normal, Comp);
  const { compTemp, styleTemp, styleTempAdaptive } = res;
  let dir;
  let comp;

  if (single) {
    dir = path.resolve();
    comp = path.resolve(dir, `${name}.jsx`);

    return wirte(comp, compTemp(opts));
  }

  dir = path.resolve(name);
  comp = path.resolve(dir, `${name}.component.jsx`);
  const style = path.resolve(dir, `${name}.component.less`);
  const styleAdaptive = path.resolve(dir, `${name}.component.adaptive.less`);

  fs.mkdirSync(`./${name}`);

  wirte(comp, compTemp(opts));
  wirte(style, styleTemp(opts));
  wirte(styleAdaptive, styleTempAdaptive(opts));

  const others = Object.assign({}, res);

  delete others.compTemp;
  delete others.styleTemp;
  delete others.styleTempAdaptive;

  const keys = Object.keys(others);

  if (!keys.length) {
    return null;
  }

  keys.forEach((key) => {
    const value = others[key];

    const keyPath = path.resolve(dir, `${key}.jsx`);
    const keyTemp = typeof value === 'function' ? value(opts) : value;

    wirte(keyPath, keyTemp);
  });
}

function run(name = '', parentName = '', cmd = {}) {
  const opts = getOpts(name, parentName, cmd);

  createComp(opts);
}

program
  .name('create-react-component-jsx-less')
  .arguments('<name> [parentName]')
  .option('-l, --low', 'React < 16.0 without PropTypes Or React-Router < 4.0')
  .option('-p, --page', 'create page component')
  .action(run)
  .parse(process.argv); 