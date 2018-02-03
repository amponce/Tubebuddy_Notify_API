# TubeBuddyNotificationApi.DevelopersApi

All URIs are relative to *https://virtserver.swaggerhub.com/tubebuddy/tbtweet/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchUsers**](DevelopersApi.md#searchUsers) | **GET** /tubebuddy | searches users


<a name="searchUsers"></a>
# **searchUsers**
> [Item] searchUsers(opts)

searches users

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
import TubeBuddyNotificationApi from 'tube_buddy_notification_api';

let apiInstance = new TubeBuddyNotificationApi.DevelopersApi();

let opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up users
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

apiInstance.searchUsers(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | **String**| pass an optional search string for looking up users | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[Item]**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

