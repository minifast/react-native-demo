import Jsdom from 'jsdom';

const jsdom = Jsdom.jsdom('<div id=\"root"\></div>');
global.document = jsdom;
global.window = jsdom.defaultView;
