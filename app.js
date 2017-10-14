angular.module("myApp", []).
controller("TreeController", ['$scope', function($scope) {
    $scope.show = function(data) {
      
      iterObj($scope.tree,data.level,data);
      data.showChild=!data.showChild;
    };
    function iterObj(obj,lvl,data) {
      
        for (var key in obj) {
          if(obj[key].level==lvl&&obj[key]!=data)
          obj[key].showChild=false;
          if (obj[key] !== null && typeof obj[key] === "object") {
            iterObj(obj[key],lvl,data);
          }
        }
      }
  
    $scope.tree = [
      {level:1,name: "Company",designation:'',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: [
        {level:2,name: "Rentomojo",designation:'Ceo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false,nodes: [
          {level:3,name: "Core",designation:'Cfo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: [
            {level:4,name: "Core",designation:'Cfo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Kyc",designation:'EA',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Core",designation:'Vp Core',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Kyc",designation:'Vp Kyc',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []}
          ]},
          {level:3,name: "Kyc",designation:'EA',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
          {level:3,name: "Core",designation:'Vp Core',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
          {level:3,name: "Kyc",designation:'Vp Kyc',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []}

        ]}           
    ]}];
    
}]);
