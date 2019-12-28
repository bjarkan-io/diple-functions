# functions ☁️

A collection of Firebase Functions that power the Firestore backend for Diple.

## 🚀 Getting started

- Get access to the Firebase projects
- `npm i -g firebase-tools`

## 🧪 Testing

Functions can be emulated locally:

```bash
# set service account key path
export GOOGLE_APPLICATION_CREDENTIALS="$(pwd)/key.json"

# start emulators
firebase emulators:start

# start only functions
firebase emulators:start --only functions
```
