cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
<<<<<<< HEAD
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
=======
>>>>>>> 706c97c8181664dfe3289a7c9af8a0859addd026
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
<<<<<<< HEAD
    "id": "cordova-plugin-chrome-apps-common.events",
    "file": "plugins/cordova-plugin-chrome-apps-common/events.js",
    "pluginId": "cordova-plugin-chrome-apps-common",
    "clobbers": [
      "chrome.Event"
    ]
  },
  {
    "id": "cordova-plugin-chrome-apps-common.errors",
    "file": "plugins/cordova-plugin-chrome-apps-common/errors.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-common.stubs",
    "file": "plugins/cordova-plugin-chrome-apps-common/stubs.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-common.helpers",
    "file": "plugins/cordova-plugin-chrome-apps-common/helpers.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-sockets-tcp.sockets.tcp",
    "file": "plugins/cordova-plugin-chrome-apps-sockets-tcp/sockets.tcp.js",
    "pluginId": "cordova-plugin-chrome-apps-sockets-tcp",
    "clobbers": [
      "chrome.sockets.tcp"
    ]
  },
  {
    "id": "cordova-plugin-contacts.contacts",
    "file": "plugins/cordova-plugin-contacts/www/contacts.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "navigator.contacts"
    ]
  },
  {
    "id": "cordova-plugin-contacts.Contact",
    "file": "plugins/cordova-plugin-contacts/www/Contact.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "Contact"
    ]
  },
  {
    "id": "cordova-plugin-contacts.convertUtils",
    "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
    "pluginId": "cordova-plugin-contacts"
  },
  {
    "id": "cordova-plugin-contacts.ContactAddress",
    "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactAddress"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactError",
    "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactError"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactField",
    "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactField"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactFindOptions",
    "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactFindOptions"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactName",
    "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactName"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactOrganization",
    "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactOrganization"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactFieldType",
    "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
    "pluginId": "cordova-plugin-contacts",
    "merges": [
      ""
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-sms-plugin.Sms",
    "file": "plugins/cordova-sms-plugin/www/sms.js",
    "pluginId": "cordova-sms-plugin",
    "clobbers": [
      "window.sms"
=======
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.androidFileSystem",
    "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransferError",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransferError"
    ]
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransfer",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransfer"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-chrome-apps-common.events",
    "file": "plugins/cordova-plugin-chrome-apps-common/events.js",
    "pluginId": "cordova-plugin-chrome-apps-common",
    "clobbers": [
      "chrome.Event"
    ]
  },
  {
    "id": "cordova-plugin-chrome-apps-common.errors",
    "file": "plugins/cordova-plugin-chrome-apps-common/errors.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-common.stubs",
    "file": "plugins/cordova-plugin-chrome-apps-common/stubs.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-common.helpers",
    "file": "plugins/cordova-plugin-chrome-apps-common/helpers.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-sockets-tcp.sockets.tcp",
    "file": "plugins/cordova-plugin-chrome-apps-sockets-tcp/sockets.tcp.js",
    "pluginId": "cordova-plugin-chrome-apps-sockets-tcp",
    "clobbers": [
      "chrome.sockets.tcp"
>>>>>>> 706c97c8181664dfe3289a7c9af8a0859addd026
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
<<<<<<< HEAD
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-chrome-apps-common": "1.0.7",
  "cordova-plugin-chrome-apps-sockets-tcp": "1.3.7",
  "cordova-plugin-contacts": "3.0.1",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-sms-plugin": "0.1.11"
=======
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-file": "6.0.1",
  "cordova-plugin-file-transfer": "1.7.1",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-chrome-apps-common": "1.0.7",
  "cordova-plugin-chrome-apps-sockets-tcp": "1.3.7"
>>>>>>> 706c97c8181664dfe3289a7c9af8a0859addd026
};
// BOTTOM OF METADATA
});