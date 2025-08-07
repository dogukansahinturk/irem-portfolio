.PHONY: *
SHELL := /bin/bash

install: ## Install NPM packages
	@echo "Installing NPM packages..."
	corepack enable
	yarn install

run:
  yarn dev
