(function(){


var app = angular.module('store-products', []);


/*DIRECTIVES!
*/

app.directive('productTitle', function(){
	return {
		//configuration object defining how your directive will work
		restrict: 'E', //Type of directive: E for Element
		templateUrl: 'product-title.html'
	};
});

app.directive('productPanels', function (){
	return {
		restrict: 'E',
		templateUrl: 'product-panels.html',
		controller: function(){
			this.tab = 1;
	
			this.selectTab = function(setTab){
				this.tab = setTab;
				//alert("called");
			};
			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};
		},
		controllerAs: 'panel',
	};
});



app.directive('productGallery', function (){
	return {
		restrict: 'E',
		templateUrl: 'product-gallery.html',
		
	};
});


})();