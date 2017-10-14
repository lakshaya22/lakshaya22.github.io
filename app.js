angular.module("myApp", []).
controller("TreeController", ['$scope', function($scope) {
    $scope.show = function(data) {
      data.showChild=!data.showChild;
    };
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
    };
    $scope.tree = [
      {name: "Company",designation:'',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: [
        {name: "Rentomojo",designation:'Ceo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false,nodes: [
          {name: "Core",designation:'Cfo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
          {name: "Kyc",designation:'EA',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
          {name: "Core",designation:'Vp Core',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
          {name: "Kyc",designation:'Vp Kyc',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []}

        ]},
        {name: "Node02",designation:'Ceo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
        {name: "Node03",designation:'Ceo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
        {name: "Node04",designation:'Ceo',personName:'Daniel',employee:'4',reportEmployee:'3',showChild:false, nodes: []},
      
      ]},
      // {name: "Node1",showChild:false, nodes: [
      
      // ]}            
    ];
}]);
