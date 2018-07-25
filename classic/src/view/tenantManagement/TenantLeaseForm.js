Ext.define('Admin.dashboard.view.empManagement.TenantLeaseForm', 
{
    extend 		: 'Admin.dashboard.override.customComponents.CustomForm'
    ,alias		: 'widget.tenantleaseform'
    ,title 		: 'Personal Details'
    ,layout 	: {type : 'hbox' }
	,itemId		: 'tenantLeaseForm'
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
	           		,allowBlank 	: false
	           		,store			: { type : 'companystore' }
            	    ,listeners		: {change : 'loadSiteInfo'}
                }
               ,{
	          		 xtype			: 'combobox'
	          		,forceSelection	: true
	          		,typeAhead		: true
	          		,displayField   : 'name'
	          		,valueField		: 'id'
	          		,minChars		: 1
	          		,autoLoadOnValue: false
	          		,queryMode 		: 'local'
	          		,name			: 'siteId'
	          		,fieldLabel     : 'Site'
	          		,store			: { type : 'sitestore' }
              		,allowBlank 	 : false
              		,listeners		: {change : 'loadBuildingInfo'}
               }
              ,{
	          		 xtype			: 'combobox'
	          		,forceSelection	: true
	          		,typeAhead		: true
	          		,displayField   : 'name'
	          		,valueField		: 'id'
	          		,minChars		: 1
	          		,name			: 'buildingId'
	          		,autoLoadOnValue: false
	          		,allowBlank 	 : false
	          		,queryMode 		: 'local'
	          		,fieldLabel     : 'Building'
	          		,store			: { type  : 'buildingstore' }
              		,listeners		: {change : 'loadFloorsInfo'}
               }
              ,{
	          		 xtype			: 'combobox'
	          		,forceSelection	: true
	          		,typeAhead		: true
	          		,displayField   : 'name'
	          		,valueField		: 'id'
	          		,minChars		: 1
	          		,name			: 'floorsId'
	          		,autoLoadOnValue: false
	          		,allowBlank 	 : false
	          		,queryMode 		: 'local'
	          		,fieldLabel     : 'Floors'
	          		,store			: { type : 'floorsstore' }
               }
              ,{
            	     xtype 			: 'textfield'
            	    ,fieldLabel     : 'Area Leased'
                    ,name			: 'areaLeased'
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
               	     xtype 			: 'numberfield'
                    ,fieldLabel     : 'Rental Ammount/sft'
                    ,name			: 'costpersft'
                	,allowBlank 	: false
                    ,maxLength		: 10
                	,minValue		: 0
                	,mouseWheelEnabled: false
                	,hideTrigger	: true
                 }
            	,{
               	     xtype 		  : 'datefield'
                    ,fieldLabel   : 'Lease From'
                    ,name		  : 'leaseFrom'
                    ,format		  : 'd-m-Y'
                    ,minValue	  : new Date()
            	 	,allowBlank   : false
                  }
            	 ,{
	        		  xtype 	  : 'datefield'
	                 ,fieldLabel  : 'Lease To'
	                 ,name		  : 'leaseTo'
	                 ,format	  : 'd-m-Y'
	                 ,minValue	  : new Date()
            	 	 ,allowBlank   : false
                 }
            	,{
               	     xtype 			: 'numberfield'
                    ,fieldLabel     : 'Increment(%)'
                    ,name			: 'incrementpercentage'
                	,allowBlank 	: false
                    ,maxLength		: 2
                	,minValue		: 0
                	,mouseWheelEnabled: false
                	,hideTrigger	: true
                 }
            ]
        }
     ]
});