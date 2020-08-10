angular.module('xompass-angular-wizard').factory('WizardHandler', function () {
  const service = {};
  const wizards = {};

  service.defaultName = 'defaultWizard';

  service.addWizard = function (name, wizard) {
    wizards[name] = wizard;
  };

  service.removeWizard = function (name) {
    delete wizards[name];
  };

  service.wizard = function (name) {
    var nameToUse = name || service.defaultName;
    return wizards[nameToUse];
  };

  return service;
});
