.PHONY: *

install: ## Install NPM packages
	@echo "Installing NPM packages..."
	corepack enable
	yarn install