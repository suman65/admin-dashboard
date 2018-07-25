Ext.define('Admin.dashboard.store.vendors.VendorStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.vendorstore'
    ,model		: 'Admin.dashboard.model.vendors.VendorModel'
    ,pageSize	: 20
    ,autoLoad	: true
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'vendorDetails'
		,startParam  : 'page'
		,limitParam  : 'size'
		,reader		 : 
		 {
		     type		     : 'json'
		    ,rootProperty    : 'content'
            ,successProperty : 'success'
		    ,totalProperty   : 'page.totalElements'
	     }
	 }
});
