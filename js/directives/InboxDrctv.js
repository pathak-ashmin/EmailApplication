// Directive: Inbox

angular.module('EmailApp')
    .directive('inbox', function inbox(){
        'use strict';


        return {
            restrict: 'EA', 
            replace: true, 
            scope: true,
            templateUrl: "js/directives/inbox.tmpl.html", 
            controllerAs:'inbox', 

            controller: function(InboxFactory){

                this.message = [];

                this.goToMessage = function(){
                    InboxFactory.goToMessage(id);
                };

                this.deleteMessage = function(id, index){
                    InboxFactory.deleteMessage(id, index);
                };

                InboxFactory.getMessages()
                    .then(angular.bind(this, function then(){
                        this.messages = InboxFactory.messages;
                    }) );

            },

                link: function(scope, element, attrs, ctrl){

                }
        }
    });