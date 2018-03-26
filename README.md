# preact-sidenav

Minimal viable sidenav implementation.

> **[Demo](https://jsfiddle.net/jordic/sqj852y4/)**


Size:

| File | Size | Gzip |
|------|------|----- |
| js   | 2,1K | 902B |
| css  | 2,3K | 626B |



### Usage Example

Use <Sidenav> and provide content and a navigation var 

```js
import Sidenav from 'preact-sidenav';

import 'node_modules/preact-sidenav/dist/sidenav.css';

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

class App extends Component {

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

render(<App />, document.body);
```

Scss file is also provided


### License

[MIT]

[MIT]: http://choosealicense.com/licenses/mit/
