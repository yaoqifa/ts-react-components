import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => {console.log(index)}} mode="vertical">
          <MenuItem>
            link1
          </MenuItem>
          <MenuItem>
            link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            link3
          </MenuItem>
        </Menu>
         <Button autoFocus> heeeel </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e) => {console.log(e)}}> hello</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="http://www.baidu.com" target="_blank">heelo link</Button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
