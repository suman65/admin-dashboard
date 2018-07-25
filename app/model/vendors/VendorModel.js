Ext.define('Admin.dashboard.model.vendors.VendorModel', {
    extend: 'Ext.data.Model'
    ,fields: [
		    	 { name : 'id'   				}
		        ,{ name : 'vendorId' 			}
		        ,{ name : 'vendorName' 			}
		        ,{ name : 'mobileNumber' 		}
		        ,{ name : 'email' 				}
		        ,{ name : 'listOfServices' 		}
		        ,{ name : 'createdDate' 		}
		   ]
});
