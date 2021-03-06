/**
 * @fileoverview Test Suite: For App's main page.
 * @author Jayendra Sharan (http://jayendra.co.in)
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '.';
import { shallow } from 'enzyme';

describe ('App Component', () => {
  let component;
  beforeEach (() => {
    component = shallow (<App
                          registerError={ 'test' }
                          userid={ 'test' }
                        />)
  })
  it('renders without crashing', () => {
    expect (component.exists ()).toEqual (true);
  });
})
