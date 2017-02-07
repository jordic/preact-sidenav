import { h, cloneElement, Component } from 'preact';
import classNames from 'classnames/dedupe';


const ESCAPE = 27;

export class Sidenav extends Component {

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

  getClassNames(props) {
    return classNames('md-sidenav-container', {
      'md-sidenav-opened': props.opened
    })
  }

  getBackdropClass(props) {
    return classNames('md-sidenav-backdrop', {
      'md-sidenav-shown': props.opened
    })
  }

  render({sidebar, children}, state) {
    let content = children[0];
    let childProps = {
      openSidenav: this.openSidenav,
      closeSidenav: this.closeSidenav
    }
    return (
      <div className={this.getClassNames(state)}>
        <div className={this.getBackdropClass(state)}
          onclick={this.closeSidenav}></div>
        <MdSidenav opened={state.opened}>
          {cloneElement(sidebar, childProps)}
        </MdSidenav>
        <MdSidenavContent opened={state.opened}>
          {cloneElement(content, childProps)}
        </MdSidenavContent>
      </div>
    )
  }
}


export class MdSidenav extends Component {


  // @TODO add mode an align support
  props = {
    // align: 'start',
    mode: 'over',
    opened: false,
  };

  state = {
    style: ''
  };

  getClassNames(props) {
    return classNames({
      'md-sidenav-over': props.mode == 'over',
      // @TODO port the rest of modes
      // [style['md-sidenav-push']]: props.mode == 'push',
      // [style['md-sidenav-side']]: props.mode == 'side',
      'md-sidenav-opened': props.opened
    })
  }

  componentWillReceiveProps(nProps) {
    if(nProps.opened != this.props.opened) {
      this.setState((s) => ({
        style: (nProps.opened) ? 'transform: translate3d(0, 0, 0)' : ''
      }))
    };
  }


  render(props, {style}) {
    return (
      <md-sidenav className={this.getClassNames(props)} style={style}>
        {props.children}
      </md-sidenav>
    )
  }
}


export function MdSidenavContent(props) {
  return (
    <div class='md-sidenav-content'>
      {props.children}
    </div>
  )
}
