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

import '../node_modules/preact-sidenav/sidenav.css'


const Nav = () => (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
)

const App = () => (
	<Sidenav sidebar={ <Nav /> } 
    onClose={close} onOpen={open}>
    <Content />
  </Sidenav>
);

render(<App />, document.body);
```

Scss file is also provided


### License

[MIT]

[MIT]: http://choosealicense.com/licenses/mit/
