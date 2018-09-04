emg
===

[![MIT LICENSE](https://img.shields.io/github/license/wayou/emg.svg)](./LICENSE)
[![npm package](https://img.shields.io/npm/v/emg.svg)](https://www.npmjs.com/package/emg)
[![npm package](https://img.shields.io/npm/dt/emg.svg)](https://www.npmjs.com/package/emg)


a simple, enhanced react image component with loading spinner, fallback support and others.


### Examples

see the [examples](./examples)


### Features

- 

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
import Emg as Img from 'emg';

class Example extends React.Component{
  public render(){
    return <Img src="url/for/image"/>
  }
}
```


### Options

- className: class name
  - type: `string`
- src: url of the image to load 
  - type: `string`
- alt: alt for the image 
  - type: `string`
- title: title attribute for the image
  - type: `string`
- style: inline style for the image
  - type: `React.CSSProperties`
- loadingImg: show while image loading
  - type: `string`
- loadErrImg: show when failed to load the image
  - type: `string`
- fallbackImg: instead of showing an error image, show this fallback one
  - type: `string`
- isLazyLoad: whether lazy load or not. enable only when `IntersectionObserver` is supported
  - type: `boolean`
- onLoad: `onload` handler
  - type: `(event: Event) => void`
- onError: `onerror` handler
  - type: `(event: Event) => void`



### Acknowledgement

#### Lazy load

Lazy load using the modern [`IntersectionObserver`](https://developers.google.com/web/updates/2016/04/intersectionobserver) api.

For more info you can read [
Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/#lazy_loading_images) from WebFundamentals.





