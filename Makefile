.PHONY: setup
setup:
	npm i

.PHONY: login
login: 
	npm login

.PHONY: publish
publish: 
	npm publish
