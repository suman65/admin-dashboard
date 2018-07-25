Ext.define('Admin.dashboard.store.tenantManagement.TenantStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.tenantstore'
    ,model		: 'Admin.dashboard.model.tenantManagement.TenantModel'
    ,pageSize	: 20
    ,autoLoad	: true
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'tenantDetails'
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
