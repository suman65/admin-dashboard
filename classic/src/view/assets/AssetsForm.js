Ext.define('Admin.dashboard.view.assets.AssetsForm', 
{
     extend 	: 'Ext.form.Panel'
    ,alias		: 'widget.assetsform'
    ,layout 	: {type : 'vbox' }
	,itemId		: 'assetsForm'
	,controller : 'assetscontroller'
	,cls 		: 'x-tabpanel-custom'
	,autoScroll : true
    ,items		:
     [
    	   {
	    	  xtype 		: 'customform'
	    	 ,title 		: 'Asset Information'
	    	 ,layout 		: {type : 'hbox' }
	      	 ,items			: 
	      	  [
	      		 {
	    	         xtype			: 'fieldset'
	    	        ,border  		:  false
	    	        ,width 			: '50%'
	    	        ,style   		: 'background-color:#fff;'
	    	        ,fieldDefaults  : 
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
	                         ,fieldLabel    : 'Serial Number'
	                         ,name			: 'serialNumber'
	                         ,allowBlank 	:  false
	                    }
	                   ,{
	                		  xtype 		: 'textfield'
	                         ,fieldLabel    : 'Model Number'
	                         ,name			: 'modelNumber'
	                         ,allowBlank 	:  false
	                    }
	                   ,{
                		     xtype 		     : 'textfield'
                            ,fieldLabel      : 'Asset Name'
                            ,name			 : 'assetName'
                            ,allowBlank 	 :  false
                        }  
	                   ,{
	                  		 xtype			: 'combobox'
	                  		,forceSelection	: true
	                  		,typeAhead		: true
	                  		,displayField   : 'name'
	                  		,valueField		: 'id'
	                  		,name			: 'assetTypeId'
	                  		,minChars		: 1
	                  		,autoLoadOnValue: false
	                  		,queryMode 		: 'local'
	                  		,fieldLabel     : 'Asset Type'
	                  		,allowBlank 	  : true
	                  		,store			: { type : 'assettypestore' }
	                     }
	                 ]
	               }
	    	      ,{
	    		         xtype			: 'fieldset'
	    		        ,border  		:  false
	    		        ,width 			: '50%'
	    		        ,style   		: 'background-color:#fff;'
	    		        ,fieldDefaults  : 
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
		                  		,name			: 'assetCategoryId'
		                  		,minChars		: 1
		                  		,autoLoadOnValue: false
		                  		,queryMode 		: 'local'
		                  		,fieldLabel     : 'Asset Category'
		                  		,allowBlank 	: false
		                  		,store			: { type : 'assetcategorystore' }
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
	    		          		,allowBlank 	: false
	    		          		,queryMode 		: 'local'
	    		          		,fieldLabel     : 'Building'
	    		          		,store			: { type  : 'buildingstore' }
	    	              		,listeners		: {change : 'loadFloorsInfo'}
	    	               }
	    	             ]
	    	       }
	      	  ]
    	   }
	      ,{
	    	  xtype 		: 'customform'
	    	 ,title 		: 'Warranty Information'
	    	 ,layout 		: {type : 'hbox' }
	      	 ,items			: 
	      	  [
	      		{
	      			 xtype			 : 'fieldset'
	      			,border  		 :  false
	      			,width 			 : '50%'
	      			,style   		 : 'background-color:#fff;'
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
	   		          		,name			: 'vendorId'
	   		          		,autoLoadOnValue: false
	   		          		,allowBlank 	: false
	   		          		,queryMode 		: 'local'
	   		          		,fieldLabel     : 'Vendor'
	   		          		,store			: { type  : 'vendorcombostore' }
   	                    }
	               	   ,{
	              		  	xtype 		 : 'datefield'
	                       ,fieldLabel   : 'Warranty From'
	                       ,name		 : 'warrantyFrom'
	                       ,allowBlank 	 : false
	                       ,format		 : 'd-m-Y'
	                       ,minValue	 : new Date()
	                    }
	                ]
	   	        }
	   		   ,{
	   	             xtype			 : 'fieldset'
	   	 	        ,border  		 :  false
	   	 	        ,width 			 : '50%'
	   	 	        ,style   		 : 'background-color:#fff;'
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
	              		  	xtype 		 : 'datefield'
	 	                   ,fieldLabel   : 'Warranty To'
	 	                   ,name		 : 'warrantyTo'
	 	                   ,allowBlank 	 : false
	 	                   ,format		 : 'd-m-Y'
	 	                   ,minValue	 : new Date()
	 	                 }
	               	    ,{
	  		          		 xtype			: 'combobox'
	  		          		,forceSelection	: true
	  		          		,typeAhead		: true
	  		          		,displayField   : 'name'
	  		          		,valueField		: 'id'
	  		          		,minChars		: 1
	  		          		,name			: 'assignedToId'
	  		          		,autoLoadOnValue: false
	  		          		,allowBlank 	: false
	  		          		,queryMode 		: 'local'
	  		          		,fieldLabel     : 'Assigned To'
	  		          		,store			: { type  : 'usercombostore' }
	                     } 
	   	             ]
	   		     }
	      	  ]
	      }
	      ,{
	    	  xtype 		: 'customform'
	    	 ,title 		: 'Purchased Information'
	    	 ,layout 		: {type : 'hbox' }
	      	 ,items			: 
	      	  [
	      		{
	      			 xtype			 : 'fieldset'
	      			,border  		 :  false
	      			,width 			 : '50%'
	      			,style   		 : 'background-color:#fff;'
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
	              		  	 xtype 		 	: 'numberfield'
	 	                    ,fieldLabel   	: 'No Of Units'
	 	                    ,name		 	: 'noOfUnits'
	 	                    ,allowBlank 	: false
	 	                	,minValue		: 0
	 	                	,mouseWheelEnabled: false
	 	                	,hideTrigger	: true
	 	                 }
	   	            	,{
	              		  	 xtype 		 	: 'datefield'
	 	                    ,fieldLabel   	: 'Purchased Date'
	 	                    ,name		 	: 'purchasedDate'
	 	                    ,allowBlank 	: false
	 	                    ,format		 	: 'd-m-Y'
		                    ,maxValue	 	: new Date()
	 	                 }
	                ]
	   	        }
	   		   ,{
	   	             xtype			 : 'fieldset'
	   	 	        ,border  		 :  false
	   	 	        ,width 			 : '50%'
	   	 	        ,style   		 : 'background-color:#fff;'
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
	  		          		,name			: 'purchasedById'
	  		          		,autoLoadOnValue: false
	  		          		,allowBlank 	: false
	  		          		,queryMode 		: 'local'
	  		          		,fieldLabel     : 'Purchased By'
	  		          		,store			: { type  : 'usercombostore' }
	                     } 
	   	             ]
	   		     }
	      	  ]
	      }
		]
	,buttons  : [ {xtype : 'button' ,text  : 'Save'  ,iconCls : 'x-fa fa-save'  ,formBind : true}]
});