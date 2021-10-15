import {Stack, Construct, StackProps} from '@aws-cdk/core';
import {ApplicationLoadBalancedFargateService} from '@aws-cdk/aws-ecs-patterns';
import {ContainerImage} from '@aws-cdk/aws-ecs';
import {Code, Function, Runtime} from '@aws-cdk/aws-lambda';
import {resolve} from 'path';

export class CdkEcsHotswapDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new ApplicationLoadBalancedFargateService(this, 'Service', {
      taskImageOptions: {
        image: ContainerImage.fromAsset('app/'),
        environment: {
          PORT: '80',
        },
      },
      desiredCount: 2,
    });

    new Function(this, 'Function', {
      code: Code.fromAsset(resolve('lambda')),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_14_X,
    });
  }
}
