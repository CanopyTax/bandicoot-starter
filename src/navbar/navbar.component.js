import React from 'react'
import {Scoped} from 'kremling'

export default function Navbar() {
  return (
    <Scoped css={css}>
      <div className="navbar">
        <div className="content">
          <a className="left" href="https://github.com/CanopyTax/bandicoot-starter">
            Bandicoot Demo
          </a>
          <div className="right">
            <a href="https://bandicoot.js.org">
              Docs
            </a>
            <a href="https://github.com/CanopyTax/bandicoot">
              Github Page
            </a>
          </div>
        </div>
      </div>
    </Scoped>
  )
}

const css = `
& .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60rem;
}

& .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-gray);
  color: white;
  height: 100%;
  width: 100%;
}

& .content a, .content a:visited {
  text-decoration: none;
  height: 100%;
  padding: 0 8rem;
  color: white;
  display: flex;
  align-items: center;
}

& .content a:hover {
  opacity: 0.6;
}

& .left {
  font-size: 24rem;
  padding-left: 16rem !important;
}

& .right {
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 12rem;
}
`
