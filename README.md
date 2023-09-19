```
yarn
yarn build
```

Check build/app.bundle.js for the final build code.

This is in webpack production mode with a modification to not mangle the variable names so it's easy to search for which code got tree-shaken or didn't (e.g., search for "loadJS").

See comments in app.js for what's needed to prevent BrowserPopupRedirectResolver from being imported.