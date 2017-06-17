# vue-bs-notify

[![npm](https://img.shields.io/npm/v/vue-bs-notify.svg)](https://www.npmjs.com/package/vue-bs-notify)
[![npm](https://img.shields.io/npm/dt/express.svg)](https://www.npmjs.com/package/vue-bs-notify)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Vue Bootstrap Notifications

### Installation
``` bash
$ npm install vue-bs-notify --save
```

### Setup

```javascript
import Notifications from 'vue-bs-notify'
Vue.use(Notifications)
```

### Usage

The show method accetps an object.
```javascript
this.$notify.show({message: 'Hello world', type: 'default'})
```

There are 6 helper functions who will accet just a string.
```javascript
this.$notify.primary('Hello world')
this.$notify.default('Hello world')
this.$notify.success('Hello world')
this.$notify.info('Hello world')
this.$notify.warning('Hello world')
this.$notify.danger('Hello world')
```

