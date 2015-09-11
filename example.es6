'use strict'

let colors = [
  ['Economist', '#e60900'],
  ['Beijing', '#121212'],
  ['Moscow', '#7a7a7a'],
  ['London', '#b6b6b6'],
  ['Berlin', '#f2f2f2'],
  ['Thimphu', '#ffffff'],
  ['Honolulu',  '#16c9b3'],
]

let colorBox = (color) => {
    let bgStyle = { background: color }
    let fgStyle = { color: color, textShadow: '1px 1px 0 gray' }
    return <span>
        <div className="inline_color_block" style={bgStyle}></div>
        <span style={fgStyle}>{color}</span>
    </span>
}

let colorSamples = colors.map(([name, color]) => (
    <tr className="color-sample">
        <td>
            <code>{name}</code>
        </td>
        <td>
            {colorBox(color)}
        </td>
    </tr>
))

export default (
    <table>
        {colorSamples}
    </table>
)
