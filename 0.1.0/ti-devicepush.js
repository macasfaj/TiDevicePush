/**
 *
 * @author Miguel Ángel Castaño Fajardo <macasfaj@gmail.com>
 */

//URL de la ap de Device Push
var _DP_urlApi = "http://api.devicepush.com/mobile/";

// register({	idUser: 'USER_ID', <-- From devicePush.com panel
//				idApplication: 'APPLICATION_ID', <-- From devicePush.com panel
//				token: 'deviceToken',
//				platformDP: 'Android' or 'iOS'
//	},
//	onSuccess, <-- callback function when the registration is OK (optional) returns devicePush ID.
//  onError <-- callback function when the registration fails
// ); 

exports.register = function(obj, onSuccess, onError){

	//Ti.API.info(JSON.stringify(obj));
	
    // DevicePusj API call.
    var xhr = Ti.Network.createHTTPClient({
      onload: function() {

        Ti.API.info("[TiDeviceToken] Token sent to our backend");
        Ti.API.info("[TiDeviceToken] Token send status: " + xhr.responseText);        
	   	if (onSuccess)
	   		onSuccess(JSON.parse(xhr.responseText)._id);
      },
      onerror: function() {
        Ti.API.info("[TiDeviceToken] Can't send token to our backend");
      	if (onError)
      		onError();
      }
    });
    
    xhr.open("POST", _DP_urlApi + obj.idApplication + '/');
    xhr.setRequestHeader("token", obj.idUser);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.send(JSON.stringify({
        token: obj.token,
        device: obj.platformDP,
        additionaldata: ''
    }));

};
