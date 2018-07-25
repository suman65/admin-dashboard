Ext.define('Admin.dashboard.view.empManagement.EmpAccountInfoForm', 
{
    extend 		: 'Admin.dashboard.override.customComponents.CustomForm'
    ,alias		: 'widget.empaccountinfoform'
    ,title 		: 'Bank Account Details'
    ,layout 	: {type : 'hbox' }
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
                    ,fieldLabel     : 'Account Number'
                    ,name			: 'accountNumber'
                    ,allowBlank 	: false
                    ,maxLength		: 20
                	,minValue		: 0
                	,mouseWheelEnabled: false
                	,hideTrigger	:  true
                  }
            	  ,{
             		 xtype			: 'combobox'
             		,forceSelection	: true
             		,typeAhead		: true
             		,displayField   : 'name'
             		,valueField		: 'id'
             		,name			: 'bankId'
             		,minChars		: 1
             		,autoLoadOnValue: false
             		,queryMode 		: 'local'
             		,fieldLabel     : 'Bank'
             		,allowBlank 	  : true
             		,store			: { type : 'bankstore' }
                  }
            	 ,{
            		  xtype 		: 'textfield'
                     ,fieldLabel    : 'IFSC Code'
                     ,name			: 'ifscCode'
                     ,allowBlank 	: false
                  }
                 ,{
               	     xtype 			: 'textfield'
                    ,fieldLabel     : 'Branch'
                    ,name			: 'branch'
                    ,allowBlank 	: false
                 }
            ]
        }
     ]
});