Ext.define('Admin.dashboard.view.empManagement.EmergencyContactsForm', 
{
    extend 		: 'Admin.dashboard.override.customComponents.CustomForm'
    ,alias		: 'widget.emergencycontactsform'
    ,title 		: 'Emergency Contacts'
    ,layout 	: {type : 'hbox'}
	,itemId		: 'emergencyContactsForm'
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
           		  	 xtype 			: 'numberfield'
                    ,fieldLabel     : 'Contact Number'
                    ,name			: 'contactNumber1'
                    ,allowBlank 	: false
                    ,maxLength		: 10
                	,minValue		: 0
                	,mouseWheelEnabled: false
                	,hideTrigger	: true
                 }
                 ,{
                	  xtype 		: 'textfield'
                     ,fieldLabel    : 'Name'
                     ,name			: 'contactpersonName1'
                     ,allowBlank 	: false
                 }
                ,{
           		  	 xtype 			: 'textfield'
                    ,fieldLabel     : 'Relationship'
                    ,name			: 'relationship1'
                    ,allowBlank 	: false
                 }
            ]
        },
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
           		  	 xtype 			: 'textfield'
                    ,fieldLabel     : 'Contact Number'
                    ,name			: 'contactNumber2'
                    ,allowBlank 	: false
                    ,maxLength		: 10
                	,minValue		: 0
                	,mouseWheelEnabled: false
                	,hideTrigger	: true
                 }
                 ,{
                	  xtype 		: 'textfield'
                     ,fieldLabel    : 'Name'
                     ,name			: 'contactpersonName2'
                     ,allowBlank 	: false
                 }
                ,{
           		  	 xtype 			: 'textfield'
                    ,fieldLabel     : 'Relationship'
                    ,name			: 'relationship2'
                    ,allowBlank 	: false
                 }
            ]
        }
     ]
});