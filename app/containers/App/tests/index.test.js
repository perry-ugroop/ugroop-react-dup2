import App from '../index';
import { shallow } from 'enzyme';
import React from 'react';

describe('Component: APP testing', () => {
  it('renders without exploding', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.length).toBe(1);
  });

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});

