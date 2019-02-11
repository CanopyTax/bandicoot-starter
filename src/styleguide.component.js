import React from 'react'
import {Scoped} from 'kremling'

export default function Styleguide(props) {
  return (
    <Scoped css={css}>
      {props.children}
    </Scoped>
  )
}

const css = `
:root {
  font-size: 1px; /* for 1rem to equal 1px */
  font-family: 'Poppins', sans-serif;
  --dark-gray: #24292E;
  --green: #00BF4B;
}

body {
  font-size: 16rem;
}
`
