'use strict'

let colors = [
  ['--Economist', '#E60900'],
  ['--Beijing', '#121212'],
  ['--Moscow', '#7A7A7A'],
  ['--London', '#B6B6B6'],
  ['--Berlin', '#F2F2F2'],
  ['--Thimphu', '#FFFFFF'],
  ['--Honolulu',  '#16C9B3'],
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
            <code>var({name})</code>
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
