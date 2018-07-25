Ext.define('Admin.dashboard.view.tenantManagement.VendorController', 
{
    extend	  : 'Ext.app.ViewController'
   ,alias	  : 'controller.vendorcontroller'
   ,addVendor :  function(bt) 
    {
        var win = Ext.create('Admin.dashboard.override.customComponents.CustomeWindow',{title : 'Vendor Management'/*,maximized : true*/ ,maximizable : true,items : [{xtype : 'vendorform'}]})
        win.show();
    }
});
