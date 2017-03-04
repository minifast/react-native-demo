import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Index from '../../index.ios';

describe('<Index/>', () => {
  describe('render()', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Index/>);
    });

    it('has three children', () => {
      expect(wrapper.node.props.children.length).to.equal(3);
    });

    it('is a view component', () => {
      expect(wrapper.node.type.displayName).to.equal('View');
    });

    it('its children are text blocks', () => {
      expect(wrapper.node.props.children[0].type.displayName).to.equal('Text');
    });

    it('is a view component with enzyme', () => {
      expect(wrapper.length).to.equal(1);
    });

    it('welcomes us to react native', () => {
      expect(wrapper.contains(<Text>Welcome to React Native!</Text>)).to.equal(true);
    });
  });
});
