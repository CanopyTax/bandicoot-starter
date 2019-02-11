import React from 'react'
import ControlButton from './control-button.component.js'
import OutdentIcon from '../icons/outdent.component.js'
import {useDocumentExecCommand} from 'bandicoot'

export default function Outdent(props) {
  const {performCommand} = useDocumentExecCommand('outdent')

  return (
    <ControlButton
      title="Unindent"
      onClick={performCommand}
      icon={OutdentIcon}
    />
  )
}

