Ext.define('Admin.dashboard.view.userManagement.UserGridController', 
{
     extend		: 'Ext.app.ViewController'
    ,alias		: 'controller.usergridcontroller'
    ,addUser	: function(btn) 
    {
    	 var win = Ext.create('Admin.dashboard.override.customComponents.CustomeWindow',{title : 'User Management'/*,maximized : true*/ ,maximizable : true,items : [{xtype : 'userdetailsform'}]})
         win.show();
    }
	,save 		: function()
	{
		alert();
	}
	,editUser : function(btn)
	{
		var me  = this;
		var record = btn.up('grid').getSelectionModel().getSelection()[0];
		me.addUser();
		var form = Ext.ComponentQuery.query('#userDetailsForm')[0];
		form.loadRecord(record);
	}
});
