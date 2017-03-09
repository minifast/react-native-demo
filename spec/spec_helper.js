import jsdom from 'jsdom';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

// JSDOM
global.document = jsdom.jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

// Chai Enzyme
chai.use(chaiEnzyme());

// Sinon Chai Bridge
chai.use(sinonChai);
