'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var colors = [['economist', '#E3120b'], ['beijing', '#121212'], ['kiev', '#383E42'], ['moscow', '#7A7A7A'], ['london', '#B6B6B6'], ['berlin', '#F2F2F2'], ['thimphu', '#FFFFFF'], ['honolulu', '#16C9B3'], ['dakar', '#0D6380'], ['boston', '#C5CBE9'], ['chicago', '#3E51B5']];
function colorBox(color) {
  var bgStyle = { background: color };
  var fgStyle = { color: color, textShadow: '1px 1px 0 gray' };
  return _react2['default'].createElement(
    'span',
    null,
    _react2['default'].createElement('div', { className: 'palette__inline-color-block', style: bgStyle }),
    _react2['default'].createElement(
      'span',
      { style: fgStyle },
      color
    )
  );
}
var colorSamples = colors.map(function (_ref) {
  var name = _ref[0];
  var color = _ref[1];
  return _react2['default'].createElement(
    'tr',
    { className: 'palette__color-sample', key: name + '--' + color },
    _react2['default'].createElement(
      'td',
      null,
      _react2['default'].createElement(
        'code',
        { className: 'color-name' },
        name
      )
    ),
    _react2['default'].createElement(
      'td',
      null,
      colorBox(color)
    )
  );
});
exports['default'] = _react2['default'].createElement(
  'table',
  null,
  _react2['default'].createElement(
    'tbody',
    null,
    colorSamples
  )
);
module.exports = exports['default'];