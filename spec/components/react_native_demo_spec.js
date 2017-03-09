import React from 'react-native';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Response } from 'node-fetch';

import ReactNativeDemo from '../../index.ios';

describe('ReactNativeDemo', () => {
  let wrapper;

  context('when the response never returns', () => {
    beforeEach(() => {
      fetch = sinon.spy(() => {
        return new Promise((resolve, reject) => {});
      });

      wrapper = mount(<ReactNativeDemo/>);
    });

    it('retrieves data from the server', () => {
      expect(fetch).to.have.been.calledWith('http://localhost:3000/test.json');
    });

    it('displays the initial set of data', () => {
      expect(wrapper.text()).to.contain('Waiting');
    });
  });

  context('when the server responds with a text chunk', () => {
    it('displays retrieved data from server', (done) => {
      const response = new Response(JSON.stringify({ text: 'Welcome to the Jungle' }));

      fetch = sinon.spy(() => {
        return Promise.resolve(response);
      });

      assertion = () => {
        expect(wrapper.update().text()).to.contain('Welcome to the Jungle');
        done();
      }

      wrapper = mount(<ReactNativeDemo afterSetState={assertion}/>);
    });
  });

  context('when the fetch is rejected', () => {
    it('displays error text', (done) => {
      const error = new Error('this went poorly');

      fetch = sinon.spy(() => {
        return Promise.reject(error);
      });

      assertion = () => {
        expect(wrapper.update().text()).to.contain('Error grabbing server data.');
        done();
      }

      wrapper = mount(<ReactNativeDemo afterSetState={assertion}/>);
    });
  });
});
