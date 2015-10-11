// Browser environment
if(typeof window !== 'undefined') {
    HookedWeb3Provider = (typeof window.HookedWeb3Provider !== 'undefined') ? window.HookedWeb3Provider : require('hooked-web3-provider');
}

// Node environment
if(typeof global !== 'undefined') {
    HookedWeb3Provider = (typeof global.HookedWeb3Provider !== 'undefined') ? global.HookedWeb3Provider : require('hooked-web3-provider');
}