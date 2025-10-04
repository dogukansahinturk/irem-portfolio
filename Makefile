.PHONY: *
SHELL := /bin/bash


install:
	@echo "Installing NPM packages..."
	@corepack enable && yarn install

run:
	@yarn dev
