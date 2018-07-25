Ext.define('Admin.dashboard.store.static.BloodGroup', {
    extend : 'Ext.data.Store',
    alias  : 'store.bloodgroup',
    fields : [{name : "name"}],
    data   : [
	        	 { name: 'O+'	  },
	        	 { name: 'O-'     },
	        	 { name: 'A+'	  },
	        	 { name: 'A-'     },
	        	 { name: 'B+'	  },
	        	 { name: 'B-'     },
	        	 { name: 'AB+'	  },
	        	 { name: 'AB-'    }
	         ]
});