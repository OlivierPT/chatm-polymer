Package.describe({
  name: 'olivierpt:chatm-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Core/Business layer for ChatM application',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('mongo');
  api.use('aldeed:simple-schema');
  api.addFiles([
    "lib/app/commons.js",
    "lib/app/methods.js",
    "lib/collections/channels.js",
    "lib/collections/messages.js"
  ], ['client','server']);
  api.addFiles([
    "server/bootstrap.js",
    "server/publish.js"
  ], ['server']);
  api.export("Channels", ['client', 'server']);
  api.export("Messages", ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('olivierpt:chatm-core');
});
