Ext.define('Admin.dashboard.view.empManagement.PersonalDetailsForm', 
{
    extend 		: 'Admin.dashboard.override.customComponents.CustomForm'
    ,alias		: 'widget.personaldetailsform'
    ,title 		: 'Personal Details'
    ,layout 	: {type : 'hbox' }
	,itemId		: 'personalDetailsForm'
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
                     ,fieldLabel    : 'First Name'
                     ,name			: 'firstName'
                     ,allowBlank 	: false
                  }
                 ,{
                	  xtype 		: 'textfield'
                     ,fieldLabel    : 'Last Name'
                     ,name			: 'lastName'
                     ,allowBlank 	: false
                 }
                ,{
           		  	 xtype 			: 'numberfield'
                    ,fieldLabel     : 'Mobile Number'
                    ,name			: 'mobileNumber'
                    ,allowBlank 	: false
                    ,maxLength		: 10
                	,minValue		: 0
                	,mouseWheelEnabled: false
                	,hideTrigger	: true
                 }
                ,{
               	     xtype 			: 'textfield'
                    ,fieldLabel     : 'Email Id'
                    ,name			: 'emailId'
                    ,vtype			: 'email'
                }
               ,{
             	   xtype 		  : 'datefield'
                  ,fieldLabel     : 'Date of Birth'
                  ,name			  : 'dob'
                  ,format		  : 'd-m-Y'
                  ,maxValue		  : new Date()
                }
               ,{
            		 xtype			: 'combobox'
            		,forceSelection	: true
            		,typeAhead		: true
            		,displayField   : 'name'
            		,valueField		: 'name'
            		,name			: 'gender'
            		,minChars		: 1
            		,autoLoadOnValue: false
            		,queryMode 		: 'local'
            		,fieldLabel     : 'Gender'
            		,allowBlank 	  : false
            		,store			: { type : 'genderstore' }
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
	           		 xtype			: 'combobox'
	           		,forceSelection	: true
	           		,typeAhead		: true
	           		,displayField   : 'name'
	           		,valueField		: 'id'
	           		,minChars		: 1
	           		,autoLoadOnValue: false
	           		,queryMode 		: 'local'
	           		,name			: 'companyId'
	           		,fieldLabel     : 'Company'
	           		,allowBlank 	: true
	           		,store			: { type : 'companystore' }
            	    ,listeners		: {change : 'loadSiteInfo'}
                }
               ,{
	          		 xtype			: 'combobox'
	          		,forceSelection	: true
	          		,typeAhead		: true
	          		,displayField   : 'name'
	          		,valueField		: 'name'
	          		,minChars		: 1
	          		,autoLoadOnValue: false
	          		,queryMode 		: 'local'
	          		,name			: 'siteId'
	          		,fieldLabel     : 'Site'
	          		,store			: { type : 'sitestore' }
              		,allowBlank 	 : true
              		,listeners		: {change : 'loadBuildingInfo'}
               }
              ,{
	          		 xtype			: 'combobox'
	          		,forceSelection	: true
	          		,typeAhead		: true
	          		,displayField   : 'name'
	          		,valueField		: 'name'
	          		,minChars		: 1
	          		,name			: 'buildingId'
	          		,autoLoadOnValue: false
	          		,allowBlank 	 : true
	          		,queryMode 		: 'local'
	          		,fieldLabel     : 'Building'
	          		,store			: { type : 'buildingstore' }
               }
              ,{
	          		 xtype			: 'combobox'
	          		,forceSelection	: true
	          		,typeAhead		: true
	          		,displayField   : 'name'
	          		,valueField		: 'name'
	          		,name			: 'departmentId'
	          		,minChars		: 1
	          		,autoLoadOnValue: false
	          		,allowBlank 	 : true
	          		,queryMode 		: 'local'
	          		,fieldLabel     : 'Department'
	          		,store			: { type : 'empdepartmentstore' }
                }
               ,{
	          		 xtype			: 'combobox'
	          		,forceSelection	: true
	          		,typeAhead		: true
	          		,displayField   : 'name'
	          		,valueField		: 'name'
	          		,name			: 'maritalStatus'
	          		,minChars		: 1
	          		,autoLoadOnValue: false
	          		,queryMode 		: 'local'
	          		,fieldLabel     : 'Marital Status'
	          		,store			: { type : 'maritalstatus' }
            		,allowBlank 	 : false
                }
               ,{
	          		 xtype			: 'combobox'
	          		,forceSelection	: true
	          		,typeAhead		: true
	          		,displayField   : 'name'
	          		,valueField		: 'name'
	          		,name			: 'bloodGroup'
	          		,minChars		: 1
	          		,autoLoadOnValue: false
	          		,queryMode 		: 'local'
	          		,fieldLabel     : 'Blood Group'
	          		,store			: { type : 'bloodgroup' }
           		   ,listeners		: {change : 'loadbloodgroup'}
               }
            ]
        }
     ]
});