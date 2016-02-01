## hookedWeb3DdpProvider

A hooked provider package for MeteorJS dApps that wish to provide the option
of a frontend accessible from a regular browser. Communicates with a hosted
`geth` node via DDP.

## install

    $ meteor add colony:hooked-web3-ddp-provider

## Usage
    var provider = new HookedWeb3DdpProvider({
        transaction_signer: {
          // Can be any object that implements the following methods:
          hasAddress: function(address, callback) {...},
          signTransaction: function(tx_params, callback) {...}
        }
    });

Note, `HookedWeb3DdpProvider` will be made a global variable.

