#!/usr/bin/env node
import 'source-map-support/register';
import {App} from '@aws-cdk/core';
import {CdkEcsHotswapDemoStack} from '../lib/cdk-ecs-hotswap-demo-stack';

const app = new App();
new CdkEcsHotswapDemoStack(app, 'CdkEcsHotswapDemoStack');
