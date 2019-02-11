import React, {useState} from 'react'
import ControlButton from './control-button.component.js'
import LinkIcon from '../icons/link.component.js'
import {useLink} from 'bandicoot'
import {useCss} from 'kremling'

export default function Link(props) {
  const [showingDialog, setShowingDialog] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [link, setLink] = useState('')
  const {insertLink, getTextFromBeforeBlur} = useLink()
  const scope = useCss(css)

  return (
    <span {...scope} className="container">
      <ControlButton
        title="Insert link"
        onClick={openDialog}
        icon={LinkIcon}
      />
      <dialog open={showingDialog}>
        <div className="link-dialog">
          <div>
            <label>
              <div>
              Displayed Text
              </div>
              <input value={displayedText} onChange={evt => setDisplayedText(evt.target.value)} />
            </label>
          </div>
          <div>
            <label>
              <div>
                Link
              </div>
              <input value={link} onChange={evt => setLink(evt.target.value)} />
            </label>
          </div>
          <div>
            <button style={{marginRight: '6rem'}} onClick={insertOurLink}>
              Insert link
            </button>
            <button onClick={() => setShowingDialog(false)}>
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </span>
  )

  function openDialog() {
    setLink('')
    setDisplayedText(getTextFromBeforeBlur() || '')
    setShowingDialog(true)
  }

  function insertOurLink() {
    setShowingDialog(false)
    insertLink(link, displayedText)
  }
}

const css = `
& .container {
  position: relative;
}

& .link-dialog div:not(:first-child) {
  margin-top: 10rem;
}
`
