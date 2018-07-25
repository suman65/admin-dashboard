Ext.define('Admin.dashboard.view.empManagement.ExperienceDetails', 
 {
     extend		: 'Admin.dashboard.override.customComponents.CustomGrid'
    ,header 	: false
    ,xtype		: 'experiencedetails'
    ,title		: 'Employee Management'
    ,routeId	: 'ExperienceDetails'
    ,store		:  { type : 'experiencedetailsstore'}
    ,controller	: 'empcontroller'
    ,pagination  : false
    ,selModel	: 'rowmodel'
    ,columns	: 
    [
         { 
        	 text		: 'Company'
        	,dataIndex	: 'companyName'
        	,editor		: 
        	 { 
        		xtype 		: 'textfield'
        	   ,allowBlank	: false 
        	  }
         }
        ,{ 
        	 text		: 'Designation'
        	,dataIndex	: 'designation'
        	,editor 	: 
        	 { 
        		 xtype 		: 'textfield'
      			,allowBlank : false
      		 }
         }
        ,{ 
        	 text		: 'From'
        	,dataIndex	: 'from'
        	,xtype		: 'datecolumn'
        	,format		: 'd-m-Y'
        	,editor: 
        	 { 
        		 allowBlank	: false    
        		,xtype 		: 'datefield' 
        		,format 	: 'd-m-Y'  
        	 }
         }
        ,{ 
        	 text		: 'To'
        	,dataIndex	: 'to'
        	,xtype		: 'datecolumn'
            ,format		: 'd-m-Y'
        	,editor		: 
        	{ 
        		 allowBlank	: false
        		,xtype 		: 'datefield' 
        		,format 	: 'd-m-Y'   
        	}
         }
        ,{  
        	 text		: 'Experience'
        	,dataIndex	: 'experience'
        	,editor		: 
        	 { 
        	    xtype 		: 'textfield'
        	   ,allowBlank	: false
        	 }
         }
        ,{ 
        	 text		: 'Salary'
        	,dataIndex	: 'salary'
        	,editor		: 
        	 { 
        		 xtype 		: 'textfield'
        		,allowBlank : false
        	 }
        }
       ,{
            xtype		: 'actioncolumn'
            ,width		: 100
            ,sortable	: false
            ,menuDisabled: true
            ,text		: 'Action'
            ,align 		: 'center'
            ,items		: 
             [
            	{
            		iconCls	: 'x-fa fa-times-circle'
            		,tooltip	: 'Delete Company'
            		,scope	: this
            	}
             ]
           ,listeners : {click :  'onRemoveClick'}
        }
    ]
    ,plugins : 
     {
        ptype		: 'cellediting',
        clicksToEdit: 1,
        pluginId : 'celleditor'
     }
    ,tbar: 
     [
    	{
    		text: 'Add Company',
    		iconCls: 'x-fa fa-plus-circle',
    		handler : function() 
    		{
    			var editor = this.up('grid').getPlugin('celleditor');
    			var store =  this.up('grid').store;
    			var r = {
    					 companyName: "",
 		                 designation: "",
 		                 from: "",
 		                 to: "",
 		                 experience: "",
 		                 salary: ""
                    };
                    store.insert(0, r);
                    editor.startEdit(0,0);
           }
    	}
    ]
});
