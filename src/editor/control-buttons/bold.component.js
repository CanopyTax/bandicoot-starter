import React from 'react'
import ControlButton from './control-button.component.js'
import BoldIcon from '../icons/bold-icon.component.js'
import {useDocumentExecCommand, useDocumentQueryCommandState} from 'bandicoot'

export default function Bold() {
  const {performCommand} = useDocumentExecCommand('bold')
  const {isActive} = useDocumentQueryCommandState('bold')

  return (
    <ControlButton
      title="Bold"
      onClick={performCommand}
      icon={BoldIcon}
      isActive={isActive}
    />
  )
}
