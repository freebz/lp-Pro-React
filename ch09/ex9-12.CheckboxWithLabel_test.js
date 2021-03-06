// 예제 9-12. 동일한 테스트를 다른 방식으로 실행

jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';

const shallowRenderer = TestUtils.createRenderer();
const CheckboxWithLabel = require('../CheckboxWithLabel');

describe('CheckboxWithLabel', () => {

  // 라벨을 포함하는 체크박스 하나를 문서에 렌더링한다.
  shallowRenderer.render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  
  const checkbox = shallowRenderer.getRenderOutput();
  const component = ShallowTestUtils.getMountedInstance(shallowRenderer);
  
  it('defaults to unchecked and Off label', () => {
    const expectedChildren = [
      <input type="checkbox" checked={false} onChange={component.onChange} />,
      "Off"
    ];
    expect(checkbox.props.children).toEqual(expectedChildren);
  });
  
});
