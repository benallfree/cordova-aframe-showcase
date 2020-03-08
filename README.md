# Cordova A-Frame Showcase

This Cordova app is a showcase of various A-Frame demos.

## Installation

```bash
git clone git@github.com:benallfree/cordova-aframe-showcase.git
cd cordova-aframe-showcase
npm i
cordova platform add ios
cordova run ios
```

Note: Currently, the iOS simulator is VERY slow. It's best to run these on a physical device.

## Available Demos

### Hello WebVR

![Hello WebVR](https://raw.githubusercontent.com/benallfree/cordova-aframe-showcase/master/samples/hello-webvr.gif)

### Hello Metaverse

![Hello Metaverse](https://raw.githubusercontent.com/benallfree/cordova-aframe-showcase/master/samples/hello-metaverse.gif)

### 360 Panorama

![360 Panorama](https://raw.githubusercontent.com/benallfree/cordova-aframe-showcase/master/samples/360pano.gif)

### Anime UI

![Anime UI](https://raw.githubusercontent.com/benallfree/cordova-aframe-showcase/master/samples/anime-ui.gif)

### Dynamic Lights

![Dynamic Lights](https://raw.githubusercontent.com/benallfree/cordova-aframe-showcase/master/samples/dynamic-lights.gif)

### Geometry Gallery

![Geometry Gallery](https://raw.githubusercontent.com/benallfree/cordova-aframe-showcase/master/samples/gallery.gif)

## Rolling Your Own

Create a new Cordova app and then follow the steps below.

Install the [cordova-plugin-xhr-local-file](https://github.com/benallfree/cordova-plugin-xhr-local-file) plugin. This is needed because
Cordova runs from `file://`, and XHR requests to local `file://` assets (JSON fonts, 3D models, etc) will fail without this plugin.

```bash
cordova plugin add cordova-plugin-xhr-local-file
```

In your `index.html`, adjust as follows:

```html
<head>
  <meta
    http-equiv="Content-Security-Policy"
    content="
          default-src 
            'self' 
            data: 
            gap: 
            https://ssl.gstatic.com 
            'unsafe-eval' 
            https://cdn.aframe.io         <-- required
            https://dpdb.webvr.rocks      <-- required
            https://fonts.googleapis.com  <-- required
            https://cdn.jsdelivr.net      <-- your choice, see below
            ; 
          style-src 
            'self' 
            'unsafe-inline'
            ; 
          media-src *; 
          img-src 
            'self' 
            data:                         <-- required
            content:                      <-- required
            blob:                         <-- required
            ;
        "
  />
  ...
  <script src="https://cdn.jsdelivr.net/npm/aframe@1.0.4/dist/aframe-master.min.js"></script>
</head>
```

That's it! Now you can render an A-Frame scene.
