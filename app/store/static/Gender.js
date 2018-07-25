Ext.define('Admin.dashboard.store.static.Gender', {
    extend : 'Ext.data.Store',
    alias  : 'store.genderstore',
    fields : [{name : "name"}],
    data   : [
	        	 { name: 'Male'	  },
	        	 { name: 'Female' }
	         ]
});