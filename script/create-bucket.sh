BUCKET_NAME=testando-aws-1

aws \
  s3 mb --region us-east-1 s3://$BUCKET_NAME \
  --endpoint-url=http://localhost:4566

aws \
  s3 ls \
  --endpoint-url=http://localhost:4566

