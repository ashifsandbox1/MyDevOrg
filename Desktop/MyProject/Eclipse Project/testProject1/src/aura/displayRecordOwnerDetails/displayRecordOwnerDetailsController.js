({
    doInit : function(component, event, helper) {    },
    
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
            component.set("v.recordOwner",component.get("v.ObjectRecord").CreatedById); // set value for record Owner
           var recordOwner = component.get("v.recordOwner");     // get the owner  
       }
            var action = component.get("c.fetchUserImage"); // get the server method
            action.setParams({	// set the server parameters
                recordOwnerId : recordOwner
            });  
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var res = response.getReturnValue();
                    component.set('v.oUser', res);
                }
                else if (state === "INCOMPLETE") {
                    // do something
                }
                    else if (state === "ERROR") {
                        var errors = response.getError();
                        if (errors) {
                            if (errors[0] && errors[0].message) {
                                console.log("Error message: " + 
                                            errors[0].message);
                            }
                        } else {
                            console.log("Unknown error");
                        }
                    }
            });
            $A.enqueueAction(action);	// fire the action to call server
    },
})