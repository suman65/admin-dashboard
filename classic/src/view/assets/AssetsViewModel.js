Ext.define('Admin.dashboard.view.assets.AssetsViewModel', 
{
     extend	: 'Ext.app.ViewModel'
    ,alias	: 'viewmodel.assetsviewmodel'
    ,stores : 
    {
    	assetsStore: 
        {
            type : 'assetsstore'
        }
    }
});
