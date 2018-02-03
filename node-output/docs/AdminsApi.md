# TubeBuddyNotificationApi.AdminsApi

All URIs are relative to *https://virtserver.swaggerhub.com/tubebuddy/tbtweet/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](AdminsApi.md#addUser) | **POST** /tubebuddy | adds twitter user


<a name="addUser"></a>
# **addUser**
> addUser(opts)

adds twitter user

Adds a user to the system

### Example
```javascript
import TubeBuddyNotificationApi from 'tube_buddy_notification_api';

let apiInstance = new TubeBuddyNotificationApi.AdminsApi();

let opts = { 
  'item': new TubeBuddyNotificationApi.Item() // Item | Add user to system
};

apiInstance.addUser(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item** | [**Item**](Item.md)| Add user to system | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

