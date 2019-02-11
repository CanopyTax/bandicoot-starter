import React, {useState, useEffect} from 'react'
import {useFontSize} from 'bandicoot'
import ControlButton from './control-button.component.js'
import {Scoped} from 'kremling'

export default function FontSize() {
  const [popupOpen, setPopupOpen] = useState(false)
  const {currentlySelectedFontSize, setSize} = useFontSize({defaultFontSize: '16px', fontSizes})
  useClosePopupOnWindowClick()

  const icon = ({color}) => <span style={{cursor: 'default', color, fontSize: '18rem'}}>{currentlySelectedFontSize.replace('px', '')}</span>

  return (
    <Scoped css={css}>
      <div className="font-size-container">
        <ControlButton
          title="Font size"
          onClick={togglePopup}
          icon={icon}
        />
        {popupOpen &&
          <div className="popup">
            <ul onClick={evt => evt.stopPropagation()}>
              {fontSizes.map(fontSizeOption)}
            </ul>
          </div>
        }
      </div>
    </Scoped>
  )

  function togglePopup() {
    setPopupOpen(!popupOpen)
  }

  function fontSizeOption(css) {
    return (
      <li key={css}>
        <span role="button" onClick={setFontSize}>
          {css.replace('px', '')}
        </span>
      </li>
    )

    function setFontSize() {
      setPopupOpen(false)
      setSize(css)
    }
  }

  function useClosePopupOnWindowClick() {
    useEffect(() => {
      if (popupOpen) {
        window.addEventListener('click', closePopup)
        return () => window.removeEventListener('click', closePopup)

        function closePopup() {
          setPopupOpen(false)
        }
      }
    }, [popupOpen, setPopupOpen])
  }
}

const fontSizes = [
  '12px',
  '14px',
  '16px',
  '18px',
  '24px',
]

const css = `
& ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

& li {
  height: 40rem;
  width: 100%;
}

& li span[role="button"] {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 16rem;
}

& li span[role="button"]:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

& .font-size-container {
  position: relative;
}

& .popup {
  position: absolute;
  right: 0;
  width: 120rem;
  border-radius: 4rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 2px 6px 0 rgba(0, 0, 0, 0.26);
  z-index: 100;
}
`
