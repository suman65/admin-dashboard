Ext.define('Admin.dashboard.store.static.MaritalStatus', {
    extend : 'Ext.data.Store',
    alias  : 'store.maritalstatus',
    fields : [{name : "name"}],
    data   : [
	        	 { name: 'Married'	  },
	        	 { name: 'Unmarried'  }
	         ]
});