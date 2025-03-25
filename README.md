# IAM Policy Monitor

A real-time monitoring system for AWS IAM policy changes.

## Project Overview

This tool provides real-time monitoring and alerts for changes to IAM policies assigned to roles in AWS accounts. It enhances security, ensures compliance, and provides visibility into IAM changes.

## Architecture

The solution uses the following AWS services:
- CloudTrail for capturing IAM events
- EventBridge for real-time event processing
- Lambda for serverless processing
- DynamoDB for storage
- React for the frontend dashboard

## Getting Started

1. Deploy the CloudFormation templates:# Continue creating the README.md file
cat > README.md << 'EOF'
# IAM Policy Monitor

A real-time monitoring system for AWS IAM policy changes.

## Project Overview

This tool provides real-time monitoring and alerts for changes to IAM policies assigned to roles in AWS accounts. It enhances security, ensures compliance, and provides visibility into IAM changes.

## Architecture

The solution uses the following AWS services:
- CloudTrail for capturing IAM events
- EventBridge for real-time event processing
- Lambda for serverless processing
- DynamoDB for storage
- React for the frontend dashboard

## Getting Started

1. To deploy the CloudFormation templates:
aws cloudformation deploy --template-file infrastructure/cloudformation/storage.yaml --stack-name iam-policy-monitor-storage --capabilities CAPABILITY_IAM
aws cloudformation deploy --template-file infrastructure/cloudformation/monitoring.yaml --stack-name iam-policy-monitor-monitoring --capabilities CAPABILITY_IAM
Copy
2. Access the dashboard (once frontend is implemented)

## Project Structure

- `infrastructure/`: CloudFormation templates defining AWS resources
- `backend/`: Lambda functions for processing IAM events
- `frontend/`: React application for visualization
- `docs/`: Project documentation
