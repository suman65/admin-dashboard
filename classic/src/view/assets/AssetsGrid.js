Ext.define('Admin.dashboard.view.assets.AssetsGrid', 
 {
	extend		: 'Admin.dashboard.override.customComponents.CustomGrid'
    ,xtype		: 'assetsinfoview'
    ,viewModel	: { type : 'assetsviewmodel'}
    ,controller : 'assetscontroller'
    ,title		: 'Assets Information'
    ,routeId	: 'assetsInformation'
    ,itemId		: 'assetsInformation'
    ,bind		: { store : '{assetsStore}'}
    ,columns	: 
        [
             { text	: 'Asset Type' 			,dataIndex	: 'assetType' 		}
            ,{ text	: 'Category' 			,dataIndex	: 'assetCategory' 	}
            ,{ text	: 'Name' 				,dataIndex	: 'assetName' 		}
            ,{ text	: 'Company' 			,dataIndex	: 'company' 		}
            ,{ text	: 'Site' 				,dataIndex	: 'site' 			}
            ,{ text	: 'Building' 			,dataIndex	: 'building' 		}
            ,{ text	: 'Created Date' 		,dataIndex	: 'createdDate' 	}
        ]
    ,tbar 		: 
        [
        	      { text    : 'Add'   		  	,iconCls   : 'x-fa fa-user-plus small-icon' 		,handler : "addAsset"}
        	     ,{ text    : 'Edit'   		  	,iconCls   : 'x-fa fa-pencil-square-o small-icon' 	/*,handler : "editUser"*/  ,itemId : 'editAsset' ,disabled : true}
        	,'->',{ xtype   : "textfield"  		,emptyText : 'Search by Name or Type'  	,width 	 :  250		}
        		 ,{ iconCls : 'x-fa fa-search'	}
        ]
});
