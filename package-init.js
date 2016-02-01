// Browser environment
if(typeof window !== 'undefined') {
    HookedWeb3DdpProvider = (typeof window.HookedWeb3DdpProvider !== 'undefined') ? window.HookedWeb3DdpProvider : require('hooked-web3-provider');
}

// Node environment
if(typeof global !== 'undefined') {
    HookedWeb3DdpProvider = (typeof global.HookedWeb3DdpProvider !== 'undefined') ? global.HookedWeb3DdpProvider : require('hooked-web3-provider');
}