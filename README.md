emg
===

[![CircleCI](https://circleci.com/gh/wayou/emg.svg?style=svg)](https://circleci.com/gh/wayou/emg)
[![MIT LICENSE](https://img.shields.io/github/license/wayou/emg.svg)](./LICENSE)
[![npm package](https://img.shields.io/npm/v/emg.svg)](https://www.npmjs.com/package/emg)
[![npm package](https://img.shields.io/npm/dt/emg.svg)](https://www.npmjs.com/package/emg)


A simple, enhanced react image component with loading spinner, fallback support and other features

### Features

- lazy loading
- loading indicator
- error handler and fallback placeholder


### Installing

Using command line:

```bash
$ yarn add emg
# or
$ npm i -S emg
```

Using cdn:

```html
<script src="//unpkg.com/emg/dist/emg.umd.js"></script>
```


### Usage

```js
import Emg from 'emg';

class Example extends React.Component{
  public render(){
    return <Emg src="url/for/image"/>
  }
}
```


### Options

- `className`: class name
  - type: `string`
- `src`: url of the image to load 
  - type: `string`
- `alt`: alt for the image 
  - type: `string`
- `title`: title attribute for the image
  - type: `string`
- `style`: inline style for the image
  - type: `React.CSSProperties`
- `loadingImg`: show while image loading
  - type: `string`
- `loadErrImg`: show when failed to load the image
  - type: `string`
- `fallbackImg`: instead of showing an error image, show this fallback one
  - type: `string`
- `isLazyLoad`: whether lazy load or not. enable only when `IntersectionObserver` is supported
  - type: `boolean`
  - default: `false`
- `onLoad`: `onload` handler
  - type: `(event: Event) => void`
- `onError`: `onerror` handler
  - type: `(event: Event) => void`


### Examples

See the [examples](https://wayou.github.io/emg/index.html).


#### run the example

clone this repo then:

```bash
$ yarn install && yarn start
```

navigate to http://localhost:3000


### Development

For development, clone this repo then

```bash
$ yarn install && yarn start
```

this will start a local server then open browser and go to http://localhost:3000 to see examples in action.

available scripts:

- `build`: generate budnles that are ready to publish
- `dev`: start local server for local development
- `lint`: run tslint & stylelint
- `test`: test the component


### Acknowledgement

#### Lazy load

Lazy load using the modern [`IntersectionObserver`](https://developers.google.com/web/updates/2016/04/intersectionobserver) api.

For more info you can read [
Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/#lazy_loading_images) from WebFundamentals.

