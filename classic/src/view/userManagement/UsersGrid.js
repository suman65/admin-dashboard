Ext.define('Admin.dashboard.view.userManagement.UsersGrid', 
 {
	extend		: 'Admin.dashboard.override.customComponents.CustomGrid'
    ,xtype		: 'userdetails'
    ,viewModel	: { type : 'userviewmodel'}
    ,controller : 'usergridcontroller'
    ,title		: 'User Results'
    ,routeId	: 'userDetails'
    ,itemsId	: 'userDetailsGrid'
    ,bind		: { store : '{allUsersResults}'}
    ,columns	: 
        [
             { text	: 'User Name' 		,dataIndex	: 'username' 		}
            ,{ text	: 'First Name' 		,dataIndex	: 'firstName' 		}
            ,{ text	: 'Last Name' 		,dataIndex	: 'lastName' 		}
            ,{ text	: 'Mobile Number' 	,dataIndex	: 'mobileNumber' 	}
            ,{ text	: 'Email Id' 		,dataIndex	: 'emilId' 			}
            ,{ text	: 'Role' 			,dataIndex	: 'role' 			}
            ,{ text	: 'Status' 			,dataIndex	: 'isActive' 		}
            ,{ text	: 'Created Date' 	,dataIndex	: 'createdDate' 	}
        ]
    ,tbar 		: 
        [
        	      { text    : 'Add'   		  	,iconCls   : 'x-fa fa-user-plus small-icon' 		,handler : "addUser"}
        	     ,{ text    : 'Edit'   		  	,iconCls   : 'x-fa fa-pencil-square-o small-icon' 	,handler : "editUser"  ,itemId : 'editUser' ,disabled : true}
        	,'->',{ xtype   : "textfield"  		,emptyText : 'Search by Name or Mobile Number'  	,width 	 :  250		}
        		 ,{ iconCls : 'x-fa fa-search'	}
        ]
    ,listeners :
	{
		itemdblclick		: 'editUser'
		,selectionchange	: function(this_, selected, eOpts)
		{
			this.down('button#editUser').setDisabled(!selected.length);
		}
	}
});
