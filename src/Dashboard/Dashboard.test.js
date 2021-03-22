import React from 'react';
import Dashboard from './Dashboard';
import renderer from 'react-test-renderer';

test("rendering x+y==x+y correctly", () => {
    let x = 1, y = 2;
    let component = renderer.create(<Dashboard x={x} y={y} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
test("rendering text props correctly", () => {
    let text = 'hello';
    let component = renderer.create(<Dashboard text={text} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})