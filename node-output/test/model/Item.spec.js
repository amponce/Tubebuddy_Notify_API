/**
 * TubeBuddy Notification API
 * TubeBuddy tweet notifications
 *
 * OpenAPI spec version: 1.0.0
 * Contact: aaron@tubebuddy.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TubeBuddyNotificationApi);
  }
}(this, function(expect, TubeBuddyNotificationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TubeBuddyNotificationApi.Item();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Item', function() {
    it('should create an instance of Item', function() {
      // uncomment below and update the code to test Item
      //var instane = new TubeBuddyNotificationApi.Item();
      //expect(instance).to.be.a(TubeBuddyNotificationApi.Item);
    });

    it('should have the property channelId (base name: "ChannelId")', function() {
      // uncomment below and update the code to test the property channelId
      //var instane = new TubeBuddyNotificationApi.Item();
      //expect(instance).to.be();
    });

    it('should have the property twitterAccount (base name: "TwitterAccount")', function() {
      // uncomment below and update the code to test the property twitterAccount
      //var instane = new TubeBuddyNotificationApi.Item();
      //expect(instance).to.be();
    });

    it('should have the property tweets (base name: "Tweets")', function() {
      // uncomment below and update the code to test the property tweets
      //var instane = new TubeBuddyNotificationApi.Item();
      //expect(instance).to.be();
    });

  });

}));
