/** @jsx h */

import h from '../../../helpers/h'

export const input = (
  <value>
    <document data={{ k: 'a' }}>
      <paragraph k="b">one</paragraph>
      <paragraph k="c">
        <text />
        <link k="d">
          <anchor />two<focus />
        </link>
        <text />
      </paragraph>
      <paragraph k="e">three</paragraph>
    </document>
  </value>
)

export default function({ document, selection }) {
  return document
    .getAncestors(selection.start.path)
    .toArray()
    .map(n => `${n.object}:${n.data.get('k')}`)
}

export const output = [`document:a`, `block:c`, `inline:d`]
