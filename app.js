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
            {level:4,name: "Core1",designation:'Cfo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Core2",designation:'EA',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Core3",designation:'Vp Core',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Core4",designation:'Vp Kyc',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []}
          ]},
          {level:3,name: "Kyc",designation:'EA',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: [
            {level:4,name: "Kyc1",designation:'Cfo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Kyc2",designation:'EA',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Kyc3",designation:'Vp Core',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Kyc4",designation:'Vp Kyc',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Kyc5",designation:'Vp Kyc',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
            {level:4,name: "Kyc6",designation:'Vp Kyc',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []}
          ]},
          {level:3,name: "Core",designation:'Vp Core',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
          {level:3,name: "Kyc",designation:'Vp Kyc',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []}

        ]}           
    ]}];

}]);
