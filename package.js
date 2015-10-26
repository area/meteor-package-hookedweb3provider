/* jshint ignore:start */
Package.describe({
  name: 'silentcicero:hooked-web3-provider',
  version: '0.0.4',
  summary: 'A Web3 Provider that has hooks for a key provider and transaction signer',
  git: 'https://github.com/SilentCicero/meteor-package-hookedweb3provider.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.export(['HookedWeb3Provider'], ['client']);

  api.addFiles('hooked-web3-provider.js', 'client');
  api.addFiles('package-init.js', 'client');
});
