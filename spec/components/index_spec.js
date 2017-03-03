import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import Index from '../../index.ios';

describe('<Index/>', () => {
  describe('render()', () => {
    let result;

    beforeEach(() => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<Index/>);
      result = renderer.getRenderOutput();
    });

    it('has three children', () => {
      expect(result.props.children.length).to.equal(3);
    });

    it('is a view component', () => {
      expect(result.type.displayName).to.equal('View');
    });

    it('its children are text blocks', () => {
      expect(result.props.children[0].type.displayName).to.equal('Text');
    });
  });
});
