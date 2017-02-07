# preact-sidenav

A simple and basic sidenav.

> **[CodePen Demo](http://codepen.io/developit/pen/WrxmGx?editors=001)**



### Usage Example

Use `<TokenInput />` like a normal `<input>`. It supports the same props/attributes, including `value`, `onInput()` and `onChange()`.

```js
import TokenInput from 'preact-token-input';

const Tags = ({ tags, ...props }) => (
	<label class="tags">
		Add some tags:
		<TokenInput value={tags} {...props} />
	</form>
);

let tags = ['new', 'noteworthy', 'tech'];
render(<Tags list={tags} />, document.body);
```




### License

[MIT]

[MIT]: http://choosealicense.com/licenses/mit/
