module.exports = opts => `
@import "~css/func/index";

.components-raven-render {
  padding: 10px;
  border-radius: 0 0 5px 0;
  text-shadow: 1px 1px 1px rgba(black,.3);

  @include rules((
    top: 0,
    left: 0,
    position: fixed,
  ));

  @include rules((
    color: white,
    font-size: 12px,
    pointer-events: none,
    background: rgba(black,.3),
  ));

  .raven-eye {
    @extend %row;

    > * {
      @include rules((
        float: left,
      ));
    }

    & + .raven-eye {
      margin-top: 5px;
    }

    .title {
      &:after {
        content: ':';
      }

      & + .desc {
        margin-left: 5px;
      }
    }
  }
}
`;
