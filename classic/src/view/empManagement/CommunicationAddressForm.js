Ext.define('Admin.dashboard.view.empManagement.CommunicationAddressForm', 
{
    extend 		: 'Admin.dashboard.override.customComponents.CustomForm'
    ,alias		: 'widget.communicationaddressform'
    ,title 		: 'Communication Address'
    ,layout 	: {type : 'hbox'}
	,itemId		: 'communicationAddressForm'
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
                     ,fieldLabel    : 'H No'
                     ,name			: 'hno'
                     ,allowBlank 	: false
                  }
                 ,{
                	  xtype 		: 'textfield'
                     ,fieldLabel    : 'Street'
                     ,name			: 'street'
                     ,allowBlank 	: false
                 }
                ,{
           		  	 xtype 			: 'textfield'
                    ,fieldLabel     : 'Area'
                    ,name			: 'area'
                    ,allowBlank 	: false
                 }
                ,{
               	     xtype 			: 'textfield'
                    ,fieldLabel     : 'Landmark'
                    ,name			: 'landmark'
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
	           		,name			: 'countryId'
	           		,fieldLabel     : 'Country'
	           		,allowBlank 	: true
	           		,store			: { type : 'countrystore' }
            	    ,listeners		: {change : 'loadStateInfo'}
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
	          		,name			: 'stateId'
	          		,fieldLabel     : 'State'
	          		,store			: { type : 'statesstore' }
              		,allowBlank 	 : true
              		,listeners		: {change : 'loadCityInfo'}
               }
              ,{
	          		 xtype			: 'combobox'
	          		,forceSelection	: true
	          		,typeAhead		: true
	          		,displayField   : 'name'
	          		,valueField		: 'name'
	          		,minChars		: 1
	          		,name			: 'cityId'
	          		,autoLoadOnValue: false
	          		,allowBlank 	 : true
	          		,queryMode 		: 'local'
	          		,fieldLabel     : 'City'
	          		,store			: { type : 'citystore' }
               }
               ,{
	    		  	  xtype 		: 'numberfield'
	                 ,fieldLabel    : 'Pincode'
	                 ,name			: 'pincode'
	                 ,allowBlank 	: false
	                 ,maxLength		: 6
	             	 ,minValue		: 0
	             	 ,mouseWheelEnabled: false
	             	 ,hideTrigger	: true
              }
            ]
        }
     ]
});