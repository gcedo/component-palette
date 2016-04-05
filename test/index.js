import 'babel-polyfill';
import Palette from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme()).should();
describe('Palette', () => {

  it('renders a React element', () => {
    React.isValidElement(<Palette />).should.equal(true);
  });

});
