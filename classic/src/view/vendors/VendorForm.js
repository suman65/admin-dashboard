Ext.define('Admin.dashboard.view.vendors.VendorForm', 
{
     extend 	: 'Ext.form.Panel'
    ,alias		: 'widget.vendorform'
    ,layout 	: {type : 'vbox' }
	,itemId		: 'vendorForm'
	,controller : 'vendorcontroller'
    ,items		:
     [
    	   {
	    	  xtype 		: 'customform'
	    	 ,title 		: 'Vendor Information'
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
	                  		 xtype			: 'combobox'
	                  		,forceSelection	: true
	                  		,typeAhead		: true
	                  		,displayField   : 'name'
	                  		,valueField		: 'id'
	                  		,name			: 'vendorCategoryId'
	                  		,minChars		: 1
	                  		,autoLoadOnValue: false
	                  		,queryMode 		: 'local'
	                  		,fieldLabel     : 'Vendor Category'
	                  		,allowBlank 	  : true
	                  		,store			: { type : 'vendorcategorystore' }
	                     }
	                	,{
	                		  xtype 		: 'textfield'
	                         ,fieldLabel    : 'Vendor Name'
	                         ,name			: 'vendorName'
	                         ,allowBlank 	:  false
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
	    	               	     xtype 			: 'textfield'
	    	                    ,fieldLabel     : 'Email Id'
	    	                    ,name			: 'emailId'
	    	                    ,vtype			: 'email'
	    	                    ,allowBlank 	: false
	    	                }
	    	               ,{
	    	              	     xtype 			: 'textfield'
	    	                   ,fieldLabel      : 'Parts Supplied'
	    	                   ,name			: 'partsSupplied'
	    	                   ,allowBlank 		: false
	    	                }
	    	             ]
	    	       }
	      	  ]
    	   }
	      ,{
	    	  xtype 		: 'customform'
	    	 ,title 		: 'Account Information'
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
	              		  	xtype 		 : 'textfield'
	                       ,fieldLabel   : 'Pan Number'
	                       ,name		 : 'pan'
	                       ,allowBlank 	 : false
	                     }
	               	   ,{
	               		     xtype 		 : 'textfield'
	                        ,fieldLabel  : 'Tan Number'
	                        ,name		 : 'tan'
	                        ,allowBlank  : false
	                     }
	               	    ,{
	               	    	 xtype 		 : 'textfield'
	                        ,fieldLabel  : 'GST Number'
	                        ,name		 : 'gstNumber'
	                        ,allowBlank  : false
	                     }
	               	    ,{
	              		  	 xtype 			: 'numberfield'
	                        ,fieldLabel     : 'Account Number'
	                        ,name			: 'accountNumber'
	                        ,allowBlank 	: false
	                        ,maxLength		: 20
	                   	    ,minValue		: 0
	                   	    ,mouseWheelEnabled: false
	                   	    ,hideTrigger	:  true
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
	   	              		,name			: 'bankId'
	   	              		,minChars		: 1
	   	              		,autoLoadOnValue: false
	   	              		,queryMode 		: 'local'
	   	              		,fieldLabel     : 'Bank'
	   	              		,allowBlank 	: false
	   	              		,store			: { type : 'bankstore' }
	   	                  }
	   	             	 ,{
	   	             		   xtype 		: 'textfield'
	   	                      ,fieldLabel   : 'IFSC Code'
	   	                      ,name			: 'ifscCode'
	   	                      ,allowBlank 	: false
	   	                   }
	   	                  ,{
	   	                	  xtype 		: 'textfield'
	   	                     ,fieldLabel    : 'Branch'
	   	                     ,name			: 'branch'
	   	                     ,allowBlank 	: false
	   	                  }
	   	             ]
	   		     }
	      	  ]
	      }
		]
	,buttons  : [ {xtype : 'button' ,text  : 'Save'  ,iconCls : 'x-fa fa-save'  ,formBind : true}]
});