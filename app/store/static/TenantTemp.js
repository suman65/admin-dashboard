Ext.define('Admin.dashboard.store.static.TenantTemp', {
    extend : 'Ext.data.Store',
    alias  : 'store.tenanttemp',
    fields : [{name : "name" ,name : "mobileNumber",name : "tenantId",name : "rent",name : "startFrom" ,name : "End Date"}],
    data   : [
	        	 { name: 'Suman Tipparapu'	 ,mobileNumber : '9985996540'  ,tenantId : '#12345' ,rent : '1,20,2000',startFrom : '01-May-2018' , endDate :'01-May-2018'},
	        	 { name: 'Suman Tipparapu'	 ,mobileNumber : '9704357724'  ,tenantId : '#12345' ,rent : '1,20,2000',startFrom : '01-May-2018' , endDate :'01-May-2018'}
	         ]
});