Ext.define('Admin.dashboard.model.empManagement.EmpModel', {
    extend: 'Ext.data.Model'
    ,fields: [
		    	 { name : 'id'   								   }
		        ,{ name : 'mobileNumber' 						   }
		        ,{ name : 'adhaarNumber' 						   }
		        ,{ name : 'firstName' 						   	   }
		        ,{ name : 'lastName' 						   	   }
		        ,{ name : 'emailId' 						   	   }
		        ,{ name : 'gender' 						   		   }
		        ,{ name : 'dob' 						   		   }
		        ,{ name : 'marialStatus' 						   }
		        ,{ name : 'bloodGroup' 						       }
		        ,{ name : 'emiId' 						           }
		        ,{ name : 'createdDate' 						   }
		        ,{ name : 'department' 						   	   }
		        ,{ name : 'departmentId' 					       }
		        ,{ name : 'site' 						   		   }
		        ,{ name : 'siteId' 						   		   }
		        ,{ name : 'buildingId' 						       }
		        ,{ name : 'building' 						       }

		        ,{ name : 'hno' 						   		   }
		        ,{ name : 'street' 						   		   }
		        ,{ name : 'area' 						   	   	   }
		        ,{ name : 'landmark' 						   	   }
		        ,{ name : 'cityId' 						   	       }
		        ,{ name : 'city' 						   		   }
		        ,{ name : 'stateId' 						   	   }
		        ,{ name : 'state' 						           }
		        ,{ name : 'countryId' 						       }
		        ,{ name : 'country' 						       }
		        ,{ name : 'pincode' 						       }

		        ,{ name : 'emergencyContactName1' 				   }
		        ,{ name : 'emergencyContactName2' 				   }
		        ,{ name : 'emergencyContact1' 					   }
		        ,{ name : 'emergencyContact2' 					   }
		        ,{ name : 'relationship1' 						   }
		        ,{ name : 'relationship2' 						   }
		   ]
});
