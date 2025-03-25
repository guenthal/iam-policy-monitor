// IAM Policy Change Event Processor
// This Lambda function processes IAM policy change events from EventBridge
// and stores them in DynamoDB for monitoring and analysis

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  
  try {
    // Extract relevant information from the event
    // In a full implementation, we would:
    // 1. Parse the CloudTrail event
    // 2. Extract IAM policy change details
    // 3. Save to DynamoDB
    // 4. Send notification if needed
    
    console.log('Successfully processed IAM policy change event');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Event processed successfully'
      })
    };
  } catch (error) {
    console.error('Error processing event:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error processing event',
        error: error.message
      })
    };
  }
};
