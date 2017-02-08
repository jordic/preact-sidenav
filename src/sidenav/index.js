import { h, cloneElement, Component } from 'preact';


/** Minimal material sidenav for mobile target
 *  @param {Function} onOpen  Handler called on sidenav opened
 *  @param {Function} onClose Handler called on sidenav closed
 *  @example
 *    <Sidenav sidebar={ <Nav /> }
 *      onOpen={open} onClose={close}>
 *        <Content />
 *    </Sidenav>
 */
export default class Sidenav extends Component {

  state = {
    opened: false
  };

  openSidenav = (e) => this._openSidenav(e);
  closeSidenav = (e) => this._closeSidenav(e);

  _closeSidenav(e) {
    if(this.props.onClose) this.props.onClose();
    this.setState((s) => ({opened: false}));
  }

  _openSidenav(e) {
    if(this.props.onOpen) this.props.onOpen();
    this.setState((s) => ({opened: true}));
  }

  render({sidebar, children}, {opened}) {
    let content = children[0];
    let childProps = {
      openSidenav: this.openSidenav,
      closeSidenav: this.closeSidenav,
      opened
    }
    return (
      <div class={'md-sidenav-container' + ((opened) ? ' md-sidenav-opened' : '')}>
        <div class={'md-sidenav-backdrop' + ((opened) ? ' md-sidenav-shown': '')}
          onclick={this.closeSidenav}></div>
        <MdSidenav opened={opened}>
          {cloneElement(sidebar, childProps)}
        </MdSidenav>
        <MdSidenavContent opened={opened}>
          {cloneElement(content, childProps)}
        </MdSidenavContent>
      </div>
    )
  }
}

function MdSidenav({opened, children}) {
  return (
    <md-sidenav class={'md-sidenav-over' + ((opened) ? ' md-sidenav-opened' : '')}
      style={(opened) ? 'transform: translate3d(0, 0, 0)' : ''}>
        {children}
    </md-sidenav>
  )
}

function MdSidenavContent(props) {
  return (
    <div class='md-sidenav-content'>
      {props.children}
    </div>
  )
}
