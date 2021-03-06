module.exports = opts => `
$iconfont-url: '//at.alicdn.com/t/font_8gxlw58ogzy6i529';

@font-face {
  font-family: "afanti-iconfont";
  src: url('#{$iconfont-url}.eot');
  src: url('#{$iconfont-url}.eot?#iefix') format('embedded-opentype'),
    url('#{$iconfont-url}.woff') format('woff'),
    url('#{$iconfont-url}.ttf') format('truetype'),
    url('#{$iconfont-url}.svg#dragonicon') format('svg');
}

.iconfont {
  font-family: "afanti-iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.t-font-setting:before { content: "\e60b"; }

.t-font-minus:before { content: "\e757"; }

.t-font-moon:before { content: "\e70c"; }

.t-font-edit:before { content: "\e66e"; }

.t-font-user:before { content: "\e64a"; }

.t-font-plus:before { content: "\e633"; }

.t-font-sun:before { content: "\e659"; }

.t-font-times:before { content: "\e609"; }

.t-font-trash:before { content: "\e65b"; }

.t-font-qrcode:before { content: "\ec56"; }

.t-font-check:before { content: "\eef9"; }

.t-font-image:before { content: "\e64c"; }

.t-font-warning:before { content: "\e672"; }
`;
