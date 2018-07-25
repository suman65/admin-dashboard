Ext.define('Admin.dashboard.view.spareParts.SparePartsViewModel', 
{
     extend	: 'Ext.app.ViewModel'
    ,alias	: 'viewmodel.sparepartsviewmodel'
    ,stores : 
    {
    	sparePartsStore: 
        {
            type : 'sparepartsstore'
        }
    }
});
