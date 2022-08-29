aws --profile personal s3 sync --exclude ".git*"  --exclude ".vscode*" --exclude ".github*" --exclude "deploy_*" --delete . "s3://muz-dreamgirl-mint"
aws --profile personal cloudfront create-invalidation --distribution-id "E1G2OYEHG290XG" --paths "/*"
