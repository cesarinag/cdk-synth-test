#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autoscaling = require("aws-cdk-lib/aws-autoscaling");
const ec2 = require("aws-cdk-lib/aws-ec2");
const elb = require("aws-cdk-lib/aws-elasticloadbalancing");
const cdk = require("aws-cdk-lib");
class LoadBalancerStack extends cdk.Stack {
    constructor(app, id) {
        super(app, id);
        const vpc = new ec2.Vpc(this, 'VPC');
        const asg = new autoscaling.AutoScalingGroup(this, 'ASG', {
            vpc,
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
            machineImage: new ec2.AmazonLinuxImage(),
        });
        const lb = new elb.LoadBalancer(this, 'LB', {
            vpc,
            internetFacing: true,
            healthCheck: {
                port: 80
            },
        });
        lb.addTarget(asg);
        const listener = lb.addListener({ externalPort: 80 });
        listener.connections.allowDefaultPortFromAnyIpv4('Open to the world');
    }
}
const app = new cdk.App();
new LoadBalancerStack(app, 'LoadBalancerStack');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyREFBNEQ7QUFDNUQsMkNBQTRDO0FBQzVDLDREQUE2RDtBQUM3RCxtQ0FBb0M7QUFFcEMsTUFBTSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN2QyxZQUFZLEdBQVksRUFBRSxFQUFVO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFZixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXJDLE1BQU0sR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDeEQsR0FBRztZQUNILFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUMvRSxZQUFZLEVBQUUsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7U0FDekMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDMUMsR0FBRztZQUNILGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUsRUFBRTthQUNUO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdEQsUUFBUSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDRjtBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksaUJBQWlCLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IGF1dG9zY2FsaW5nID0gcmVxdWlyZSgnYXdzLWNkay1saWIvYXdzLWF1dG9zY2FsaW5nJyk7XG5pbXBvcnQgZWMyID0gcmVxdWlyZSgnYXdzLWNkay1saWIvYXdzLWVjMicpO1xuaW1wb3J0IGVsYiA9IHJlcXVpcmUoJ2F3cy1jZGstbGliL2F3cy1lbGFzdGljbG9hZGJhbGFuY2luZycpO1xuaW1wb3J0IGNkayA9IHJlcXVpcmUoJ2F3cy1jZGstbGliJyk7XG5cbmNsYXNzIExvYWRCYWxhbmNlclN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3IoYXBwOiBjZGsuQXBwLCBpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoYXBwLCBpZCk7XG5cbiAgICBjb25zdCB2cGMgPSBuZXcgZWMyLlZwYyh0aGlzLCAnVlBDJyk7XG5cbiAgICBjb25zdCBhc2cgPSBuZXcgYXV0b3NjYWxpbmcuQXV0b1NjYWxpbmdHcm91cCh0aGlzLCAnQVNHJywge1xuICAgICAgdnBjLFxuICAgICAgaW5zdGFuY2VUeXBlOiBlYzIuSW5zdGFuY2VUeXBlLm9mKGVjMi5JbnN0YW5jZUNsYXNzLlQyLCBlYzIuSW5zdGFuY2VTaXplLk1JQ1JPKSxcbiAgICAgIG1hY2hpbmVJbWFnZTogbmV3IGVjMi5BbWF6b25MaW51eEltYWdlKCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBsYiA9IG5ldyBlbGIuTG9hZEJhbGFuY2VyKHRoaXMsICdMQicsIHtcbiAgICAgIHZwYyxcbiAgICAgIGludGVybmV0RmFjaW5nOiB0cnVlLFxuICAgICAgaGVhbHRoQ2hlY2s6IHtcbiAgICAgICAgcG9ydDogODBcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBsYi5hZGRUYXJnZXQoYXNnKTtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGxiLmFkZExpc3RlbmVyKHsgZXh0ZXJuYWxQb3J0OiA4MCB9KTtcblxuICAgIGxpc3RlbmVyLmNvbm5lY3Rpb25zLmFsbG93RGVmYXVsdFBvcnRGcm9tQW55SXB2NCgnT3BlbiB0byB0aGUgd29ybGQnKTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IExvYWRCYWxhbmNlclN0YWNrKGFwcCwgJ0xvYWRCYWxhbmNlclN0YWNrJyk7XG5hcHAuc3ludGgoKTtcbiJdfQ==