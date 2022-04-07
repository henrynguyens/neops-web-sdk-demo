libraries:
		ng build @zebbra/ngx-neops-app-components
		ng build @zebbra/ngx-neops-app-services
		ng build @zebbra/ngx-neops-client

dry-publish:

		(cd dist/zebbra/ngx-neops-app-components && npm publish --dry-run)
		(cd dist/zebbra/ngx-neops-app-services && npm publish --dry-run)
		(cd dist/zebbra/ngx-neops-client && npm publish --dry-run)


