(function(module) {
try {
  module = angular.module('ionic-numberpicker.templates');
} catch (e) {
  module = angular.module('ionic-numberpicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('ionic-numberpicker-decimal.html',
    '<div class=DecimalPickerChildDiv><div class=row><label id=sign class="col col-offset-10 col-10 numberPickerDecimal">{{sign}}</label> <span class="button-small col col-25"><button type=button class="button button-clear button-small button-dark numberPickerArrows marginBottom10" ng-mousedown="startWholeUp(\'mouse\')" ng-mouseup=stopWholeUp() ng-mouseleave=stopWholeUp() ng-touchstart="startWholeUp(\'touch\')" ng-touchend=stopWholeUp()><i class="icon ion-chevron-up"></i></button><div id=wholeNumber class="ipBoxes numberPickerBoxText">{{wholeNumber}}</div><button type=button class="button button-clear button-small button-dark numberPickerArrows marginTop10" ng-mousedown="startWholeDown(\'mouse\')" ng-mouseup=stopWholeDown() ng-mouseleave=stopWholeDown() ng-touchstart="startWholeDown(\'touch\')" ng-touchend=stopWholeDown()><i class="icon ion-chevron-down"></i></button></span> <label class="col col-10 numberPickerDecimal">{{ decimalCharacter }}</label> <span class="button-small col col-25"><button type=button class="button button-clear button-small button-dark numberPickerArrows marginBottom10" ng-mousedown="startDecimalUp(\'mouse\')" ng-mouseup=stopDecimalUp() ng-mouseleave=stopDecimalUp() ng-touchstart="startDecimalUp(\'touch\')" ng-touchend=stopDecimalUp()><i class="icon ion-chevron-up"></i></button><div id=decimalNumber class="ipBoxes numberPickerBoxText">{{decimalDisplay()}}</div><button type=button class="button button-clear button-small button-dark numberPickerArrows marginTop10" ng-mousedown="startDecimalDown(\'mouse\')" ng-mouseup=stopDecimalDown() ng-mouseleave=stopDecimalDown() ng-touchstart="startDecimalDown(\'touch\')" ng-touchend=stopDecimalDown()><i class="icon ion-chevron-down"></i></button></span> <label class="col numberPickerDecimal">{{ unit }}</label></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('ionic-numberpicker.templates');
} catch (e) {
  module = angular.module('ionic-numberpicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('ionic-numberpicker-whole.html',
    '<div class=WholeNumberPickerChildDiv><div class=row><label id=sign class="col col-offset-25 col-10 numberPickerDecimal">{{sign}}</label> <span class="button-small col col-25"><button type=button class="button button-clear button-small button-dark numberPickerArrows marginBottom10" ng-mousedown="startWholeUp(\'mouse\')" ng-mouseup=stopWholeUp() ng-mouseleave=stopWholeUp() ng-touchstart="startWholeUp(\'touch\')" ng-touchend=stopWholeUp()><i class="icon ion-chevron-up"></i></button><div id=wholeNumber class="ipBoxes numberPickerBoxText">{{wholeNumber}}</div><button type=button class="button button-clear button-small button-dark numberPickerArrows marginTop10" ng-mousedown="startWholeDown(\'mouse\')" ng-mouseup=stopWholeDown() ng-mouseleave=stopWholeDown() ng-touchstart="startWholeDown(\'touch\')" ng-touchend=stopWholeDown()><i class="icon ion-chevron-down"></i></button></span> <label class="col numberPickerDecimal">{{ unit }}</label></div></div>');
}]);
})();
