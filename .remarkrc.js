// https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#options
exports.settings = {
  listItemIndent: 1,
  emphasis: '_',
  strong: '_',
  bullet: '*',
  incrementListMarker: false
};

exports.plugins = [
  '@dsmjs/remark-preset-lint',
  ['remark-toc', {tight: true}]
];
