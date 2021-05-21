import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as InitializingANewCdkAppNs from '../lib/initializing-a-new-cdk-app-ns-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new InitializingANewCdkAppNs.InitializingANewCdkAppNsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
