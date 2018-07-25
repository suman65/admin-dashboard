Ext.define('Admin.dashboard.view.tenantManagement.TenantPersonalDetailsForm', 
{
    extend 		: 'Admin.dashboard.override.customComponents.CustomForm'
    ,alias		: 'widget.tenantpersonaldetailsform'
    ,title 		: 'Personal Details'
    ,layout 	: {type : 'hbox' }
	,itemId		: 'tenantPersonalDetailsForm'
    ,items		:
     [
	      {
	         xtype			: 'fieldset'
	        ,border  		:  false
	        ,width 			: '50%'
	        ,style   		: 'background-color:#fff;'
	        ,fieldDefaults   : 
	         {
	             labelWidth	    	: 150
	            ,labelAlign			: 'left'
	            ,labelSeparator  	: ''
	            ,submitEmptyText 	: false
	            ,anchor 			: '90%'
	            ,margin 			: 15
	         }
            ,items: 
             [
            	 {
            		  xtype 		: 'textfield'
                     ,fieldLabel    : 'Tenant Name'
                     ,name			: 'name'
                     ,allowBlank 	: false
                 }
                ,{
           		  	 xtype 			: 'numberfield'
                    ,fieldLabel     : 'Contact Number1'
                    ,name			: 'contactNumber1'
                    ,allowBlank 	: false
                    ,maxLength		: 10
                	,minValue		: 0
                	,mouseWheelEnabled: false
                	,hideTrigger	: true
                 }
                ,{
          		  	xtype 			: 'numberfield'
                   ,fieldLabel      : 'Contact Number2'
                   ,name			: 'contactNumber2'
                   ,allowBlank 		: false
                   ,maxLength		: 10
               	   ,minValue		: 0
               	   ,mouseWheelEnabled: false
               	   ,hideTrigger		: true
                }
               ,{
               	     xtype 			: 'textfield'
                    ,fieldLabel     : 'Email Id1'
                    ,name			: 'emailId1'
                    ,vtype			: 'email'
                    ,allowBlank 	:  false
                }
               ,{
             	    xtype 			: 'textfield'
                   ,fieldLabel      : 'Email Id2'
                   ,name			: 'emailId2'
                   ,vtype			: 'email'
                   ,allowBlank 		: false
              }
            ]
        }
     ]
});