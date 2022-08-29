aws --profile personal s3 sync --exclude ".git*"  --exclude ".vscode*" --exclude ".github*" --exclude "deploy_*" --delete . "s3://serenity-web-mint-development"
aws --profile personal cloudfront create-invalidation --distribution-id "E4YF5CWWW0LR3" --paths "/*"
