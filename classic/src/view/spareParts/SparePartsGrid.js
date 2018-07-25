Ext.define('Admin.dashboard.view.spareParts.SparePartsGrid', 
 {
	extend		: 'Admin.dashboard.override.customComponents.CustomGrid'
    ,xtype		: 'sparepartsview'
    ,viewModel	: { type : 'sparepartsviewmodel'}
    ,title		: 'Spare Parts Information'
    ,routeId	: 'sparePartsGrid'
    ,itemId		: 'sparePartsGrid'
    ,bind		: { store : '{sparePartsStore}'}
    ,columns	: 
        [
             { text	: 'Category' 			,dataIndex	: 'sparePartCategory'	}
            ,{ text	: 'Name' 				,dataIndex	: 'sparePartName' 		}
            ,{ text	: 'Part Number' 		,dataIndex	: 'sparePartNumber' 	}
            ,{ text	: 'Company' 			,dataIndex	: 'company' 			}
            ,{ text	: 'Site' 				,dataIndex	: 'site' 				}
            ,{ text	: 'Building' 			,dataIndex	: 'building' 			}
            ,{ text	: 'Quantity' 			,dataIndex	: 'quantity' 			}
            ,{ text	: 'Unit Cost' 			,dataIndex	: 'unitCost' 			}
            ,{ text	: 'Created Date' 		,dataIndex	: 'createdDate' 		}
        ]
    ,tbar 		: 
        [
        	      { text    : 'Add'   		  	,iconCls   : 'x-fa fa-user-plus small-icon' 		/*,handler : "addAsset"*/}
        	     ,{ text    : 'Edit'   		  	,iconCls   : 'x-fa fa-pencil-square-o small-icon' 	/*,handler : "editUser"*/  ,itemId : 'editPart' ,disabled : true}
        	,'->',{ xtype   : "textfield"  		,emptyText : 'Search by Name or Category'  	,width 	 :  250		}
        		 ,{ iconCls : 'x-fa fa-search'	}
        ]
});
