import {expect as expectCDK, matchTemplate, MatchStyle} from '@aws-cdk/assert';
import {App} from '@aws-cdk/core';
import {CdkEcsHotswapDemoStack} from '../lib/cdk-ecs-hotswap-demo-stack';

test('Empty Stack', () => {
  const app = new App();
  // WHEN
  const stack = new CdkEcsHotswapDemoStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
