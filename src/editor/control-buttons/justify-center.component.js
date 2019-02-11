import React from 'react'
import ControlButton from './control-button.component.js'
import CenterAlignmentIcon from '../icons/center-alignment.component.js'
import {useDocumentExecCommand, useDocumentQueryCommandState} from 'bandicoot'

export default function JustifyCenter(props) {
  const {performCommand} = useDocumentExecCommand('justifyCenter')
  const {isActive} = useDocumentQueryCommandState('justifyCenter')

  return (
    <ControlButton
      title="Justify center"
      onClick={performCommand}
      icon={CenterAlignmentIcon}
      isActive={isActive}
    />
  )
}

