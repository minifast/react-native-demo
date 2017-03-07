import React from 'react-native';
import { render } from 'enzyme';
import { expect } from 'chai';
import ReactNativeDemo from '../../index.ios';

describe('ReactNativeDemo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<ReactNativeDemo/>);
  });

  it('welcomes the guest', () => {
    expect(wrapper.text()).to.contain('Welcome to React Native');
  });

  it('it displays its excitment', () => {
    expect(wrapper.text()).to.contain('Hello, Ministry of Velocity!');
  });
});
