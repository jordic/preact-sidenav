import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Sidenav from './sidenav';


const Nav = (props) => (
  <div>
    <ul>
      <li>Menu item 1</li>
      <li>Menu item 2</li>
      <li>Menu item 3</li>
      <li><button onclick={props.closeSidenav} >Close</button></li>
    </ul>

  </div>
)

const Content = (props) => (
  <div class="header">
    <button onclick={props.openSidenav}>Toggle Sidebar</button>
    <p style="font-size:100px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat non aliquid corrupti eius provident at officia repudiandae sit vero suscipit ullam deleniti numquam distinctio quos soluta, libero dolorem neque. Incidunt.</p>
  </div>
)


export default class App extends Component {

  onOpen = () => console.log('open');
  onClose = () => console.log('close');

  render(props, state) {
    return (
      <div id="app">
        <Sidenav sidebar={ <Nav /> } onOpen={this.onOpen} onClose={this.onClose}>
          <Content />
        </Sidenav>
      </div>
    );
  }
}

