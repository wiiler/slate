/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.addMarks(['bold', 'italic'])
}

export const input = (
  <value>
    <document>
      <paragraph>
        wo<anchor />rd
      </paragraph>
      <paragraph>
        an<focus />other
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        wo
        <i>
          <b>
            <anchor />rd
          </b>
        </i>
      </paragraph>
      <paragraph>
        <i>
          <b>an</b>
        </i>
        <focus />other
      </paragraph>
    </document>
  </value>
)
