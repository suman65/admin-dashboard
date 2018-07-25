Ext.define('Admin.dashboard.view.vendors.VendorGrid', 
 {
	extend		: 'Admin.dashboard.override.customComponents.CustomGrid'
    ,xtype		: 'vendorinfoview'
    ,viewModel	: { type : 'vendorviewmodel'}
    ,controller : 'vendorcontroller'
    ,title		: 'Vendor Information'
    ,routeId	: 'vendorInformation'
    ,itemId		: 'vendorInformation'
    ,bind		: { store : '{vendorStore}'}
    ,columns	: 
        [
             { text	: 'Vendor Id' 			,dataIndex	: 'vendorId' 		}
            ,{ text	: 'Vendor Name' 		,dataIndex	: 'vendorName' 		}
            ,{ text	: 'Mobile Number' 		,dataIndex	: 'mobileNumber' 	}
            ,{ text	: 'Email' 				,dataIndex	: 'email' 			}
            ,{ text	: 'List Of Services' 	,dataIndex	: 'listOfServices' 	}
            ,{ text	: 'Created Date' 		,dataIndex	: 'createdDate' 	}
        ]
    ,tbar 		: 
        [
        	      { text    : 'Add'   		  	,iconCls   : 'x-fa fa-user-plus small-icon' 		,handler : "addVendor"}
        	     ,{ text    : 'Edit'   		  	,iconCls   : 'x-fa fa-pencil-square-o small-icon' 	/*,handler : "editUser"*/  ,itemId : 'editVendor' ,disabled : true}
        	,'->',{ xtype   : "textfield"  		,emptyText : 'Search by Name or Mobile Number'  	,width 	 :  250		}
        		 ,{ iconCls : 'x-fa fa-search'	}
        ]
});
