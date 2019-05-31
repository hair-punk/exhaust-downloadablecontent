import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/src/index';
import GameAddOns from '../client/src/components/GameAddOns';


describe('App component', () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <App />
      );
    }
    return mountedApp;
  }

  // TODO currently does not receive props, will when incorporated into proxy

  test('always renders a div', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  test('the rendered div contains everything else that gets rendered', () => {
    const divs = app().find('div');
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children().length).toBe(app().children().length + 1);
  });

  describe('Component Mounts', () => {
    let mounted = app();
    beforeEach(() => {
      App.prototype.componentDidMount = () => {
        mounted.setState({ gameName: 'Fake Name' });
      };
    });
    test('sets state when component mounts', (done) => {
      const shallowApp = shallow(<App />)
      expect(shallowApp.state('dlcs')).toBeTruthy();
      expect(shallowApp.state('gameName')).toBeFalsy();

      expect(mounted.state('gameName')).toBeTruthy();
      expect(mounted.state('gameName')).toBe('Fake Name');
      done();
    });
  });

  // TODO conditionally renders franchise div
  describe('Franchise Div', () => {
    let mounted = app();
    beforeEach(() => {
      App.prototype.componentDidMount = () => {
        mounted.setState({ franchise_boolean_true: true, franchise_boolean_false: false });
      };
    });
    test('renders div if state.franchise_boolean is true', () => {});
    test('does not render div if state.franchise_boolean is false', () => {});
  });

  // TODO always renders game purchase banner div
  test('renders main game purchase banner div', () => {});

  // TODO conditionally renders dlcs
  // TODO passes dlc data to dlcs/gameaddons
  describe('DLCs Div', () => {
    test(`renders 'GameAddOns' if state.dlcs.length > 0`, () => {});
    test(`does not render 'GameAddOns' if state.dlcs.length = 0`, () => {});
    test(`passes dlc data as props to 'GameAddOns' as 'dlcs'`, () => {});
  });


})

// it('works', () => {});
// App.prototype.componentDidMount = () => {
//   console.log('componentDidMount method is called');
// };