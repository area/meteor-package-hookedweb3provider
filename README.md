## <a href="https://github.com/ConsenSys/hooked-web3-provider">HookedWeb3Provider</a>
A hooked provider package for MeteorJS dApps.

## install
    $ meteor add silentcicero:hookedweb3provider

## Usage
    var provider = new HookedWeb3Provider({
        host: "http://localhost:8545",
        transaction_signer: { 
          // Can be any object that implements the following methods:
          hasAddress: function(address, callback) {...},
          signTransaction: function(tx_params, callback) {...}
        }
    });

Note, HookedWeb3Provider will be made a global variable.

