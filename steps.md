proxy servers in package.json ----> for the backend and rest apis

npm run build

to push to Amazon S3 bucket:
aws s3 cp /Users/pratik/Documents/my-website/build s3://pratikmathur.com/ --recursive
aws s3 cp /Users/pratik/Documents/my-website/build s3://www.pratikmathur.com/ --recursive

aws s3 sync /Users/pratik/Documents/my-website/build s3://pratikmathur.com/ --recursive
aws s3 sync /Users/pratik/Documents/my-website/build s3://www.pratikmathur.com/