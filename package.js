/* jshint ignore:start */
Package.describe({
  name: 'colony:hooked-web3-ddp-provider',
  version: '0.0.1',
  summary: 'Web3 Provider that communicates with geth via DDP. Uses an external key provider/transaction signer',
  git: 'https://github.com/joinColony/meteor-package-hookedweb3provider.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('colony:web3-ddp-provider');
  api.export(['HookedWeb3DdpProvider'], ['client']);

  api.addFiles('hooked-web3-ddp-provider.js', 'client');
  api.addFiles('package-init.js', 'client');
});
