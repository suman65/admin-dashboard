Ext.define('Admin.dashboard.view.empManagement.EmpGrid', 
 {
     extend		: 'Admin.dashboard.override.customComponents.CustomGrid'
    ,xtype		: 'employeedetails'
    ,viewModel	:  { type : 'empviewmodel'}
    ,title		: 'Employee Management'
    ,routeId	: 'empdetails'
    ,bind		:  { store : '{empAllStore}'}
    ,controller	: 'empcontroller'
    ,columns	: 
    [
         { text	: 'Emp ID' 			,dataIndex	: 'empId' 			}
        ,{ text	: 'First Name' 		,dataIndex	: 'firstName' 		}
        ,{ text	: 'Last Name' 		,dataIndex	: 'lastName' 		}
        ,{ text	: 'Mobile Number' 	,dataIndex	: 'mobileNumber' 	}
        ,{ text	: 'Adhaar Number' 	,dataIndex	: 'adhaarNumber' 	}
        ,{ text	: 'Email Id' 		,dataIndex	: 'emilId' 			}
        ,{ text	: 'Department' 		,dataIndex	: 'department' 		}
        ,{ text	: 'Building' 		,dataIndex	: 'building' 		}
        ,{ text	: 'Site' 			,dataIndex	: 'site' 			}
        ,{ text	: 'Company' 		,dataIndex	: 'company' 		}
        ,{ text	: 'Status' 			,dataIndex	: 'isActive' 		}
        ,{ text	: 'Created Date' 	,dataIndex	: 'createdDate' 	}
    ]
    ,tbar	: 
     [
    	    { text 	  : 'Add'  				,iconCls   : 'x-fa fa-user-plus small-icon' 		,handler  : 'addEmployee'}
    	   ,{ text    : 'Edit'   		  	,iconCls   : 'x-fa fa-pencil-square-o small-icon' 	,handler  : "editEmployee"  ,itemId : 'editEmployee' ,disabled : true}
      ,'->',{ xtype   : "textfield" 		,emptyText : 'Search by Emp Id or Name'   			,width    : 250		   	}
		   ,{ iconCls : 'x-fa fa-search'		}
     ]
    ,listeners :
	 {
		itemdblclick		: 'editEmployee'
		,selectionchange	: function(this_, selected, eOpts)
		{
			this.down('button#editEmployee').setDisabled(!selected.length);
		}
	 }
});
