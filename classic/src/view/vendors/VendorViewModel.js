Ext.define('Admin.dashboard.view.vendors.VendorViewModel', 
{
     extend	: 'Ext.app.ViewModel'
    ,alias	: 'viewmodel.vendorviewmodel'
    ,stores : 
    {
        vendorStore: 
        {
            type : 'vendorstore'
        }
    }
});
