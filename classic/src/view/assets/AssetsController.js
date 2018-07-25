Ext.define('Admin.dashboard.view.assets.AssetsController', 
{
    extend	  : 'Ext.app.ViewController'
   ,alias	  : 'controller.assetscontroller'
   ,addAsset  :  function(bt) 
    {
        var win = Ext.create('Admin.dashboard.override.customComponents.CustomeWindow',{title : 'Asset Information'/*,maximized : true*/ ,maximizable : true,items : [{xtype : 'assetsform'}]})
        win.show();
    }
});
