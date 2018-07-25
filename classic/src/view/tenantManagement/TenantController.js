Ext.define('Admin.dashboard.view.tenantManagement.TenantController', 
{
    extend	: 'Ext.app.ViewController'
   ,alias	: 'controller.tenantcontroller'
   ,addTenant: function(bt) 
    {
        var win = Ext.create('Admin.dashboard.override.customComponents.CustomeWindow',{title : 'Tenant Management'/*,maximized : true*/ ,maximizable : true,items : [{xtype : 'tenanttabpanel'}]})
        win.show();
    }
   ,loadSiteInfo : function(combo, newValue, oldValue, eOpts)
	{
	}
   ,loadBuildingInfo : function(combo, newValue, oldValue, eOpts)
	{
	}
   ,loadFloorsInfo : function(combo, newValue, oldValue, eOpts)
	{
	}
    ,activateLeaseDetails : function(btn)
	 {
		Ext.ComponentQuery.query('#tenantLeaseDetails')[0].setDisabled(false).show();
	 }
	,activateTenantAccountDetails : function(currentTab)
	 {
		Ext.ComponentQuery.query('#tenantAccountDetails')[0].setDisabled(false).show();
	 }
	,activateDocumentDetails : function(currentTab)
	 {
		Ext.ComponentQuery.query('#tenantDocumentDetails')[0].setDisabled(false).show();
	 }
});
