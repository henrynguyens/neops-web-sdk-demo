libraries:
		ng build @zebbra/ngx-neops-app-components
		ng build @zebbra/ngx-neops-app-services
		ng build @zebbra/ngx-neops-client
		ng build @zebbra/ngx-neops-dashboard
		ng build @zebbra/ngx-neops-generic-table

publish:

		(cd dist/zebbra/ngx-neops-app-components && npm publish)
		(cd dist/zebbra/ngx-neops-app-services && npm publish)
		(cd dist/zebbra/ngx-neops-client && npm publish)
		(cd dist/zebbra/ngx-neops-dashboard && npm publish)
		(cd dist/zebbra/ngx-neops-generic-table && npm publish)


