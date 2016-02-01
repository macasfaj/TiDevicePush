# DevicePush Module

## Description

Ti-Device Push module allows register and receive Push Notifications from www.decivepush.com APIs

### Get the module

**Find the newest version in the dist folder**

## Referencing the module in your Ti mobile application 

Simply add the following lines to your `tiapp.xml` file:

<modules>
    <module platform="commonjs">ti-devicepush</module>
</modules>


## Reference

For more detailed code examples take a look into the example app

## API Methods
```javascript
var devicePush = require('ti-devicepush');

devicePush.register({
    idApplication: 'XXXXXX',    // You can get it in your DevicePush panel
    idUser: 'XXXXX',            // You can get it in your DevicePush panel
    token: deviceToken,         // See example.
    platformDP: OS_IOS ? 'iOS' : 'Android'
},  onSuccess,                  // Optional. Success callback
    onError);                    // Optional. Failure callback
```

## Changelog

* v1.0  
* init


## Author

** Miguel A. Castaño**  
web: http://www.devicepush.com  
email: macasfaj@gmail.com 
twitter: @macasfaj  


## License

Copyright (c) 2016 Miguel A. Castaño

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
