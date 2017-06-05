/**
 * Created by zhudong on 2017/6/3.
 */
var ReactNative = require('react-native');
var Dimensions = require('Dimensions');
export var screenW = Dimensions.get('window').width;
export var screenH = Dimensions.get('window').height;
var fontScale = ReactNative.PixelRatio.getFontScale();
export var pixelRatio = ReactNative.PixelRatio.get();
const r2 = 2;
const w2 = 360 / r2;
const h2 = 480 / r2;

export const DEFAULT_DENSITY = 2;
export function setSpText(size) {
    var scaleWidth = screenW / w2;
    var scaleHeight = screenH / h2;
    var scale = Math.min(scaleHeight, scaleWidth);
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    return size;
}

export function scaleSize(size) {
    var scaleWidth = screenH / w2;
    var scaleHeight = screenH / h2;
    var scale = Math.min(scaleHeight, scaleWidth);
    size = Math.round((size * scale + 0.5));
    return size / DEFAULT_DENSITY;
}

export function getSize(size) {
    var scaleWidth = screenH / w2;
    var scaleHeight = screenH / h2;
    var scale = Math.min(scaleHeight, scaleWidth);
    size = Math.round((size * scale + 0.5));
    return size / DEFAULT_DENSITY;
}