Ext.define('Admin.dashboard.view.empManagement.EmpController', 
{
     extend	: 'Ext.app.ViewController'
    ,alias	: 'controller.empcontroller'
    ,addEmployee: function(bt) 
     {
        var win = Ext.create('Admin.dashboard.override.customComponents.CustomeWindow',{title : 'Employee Management'/*,maximized : true*/ ,maximizable : true,items : [{xtype : 'emptabpanel'}]})
        win.show();
     }
    ,editEmployee : function(btn)
    {
    	var me  = this;
		var record = btn.up('grid').getSelectionModel().getSelection()[0];
		me.addEmployee();
		var form = Ext.ComponentQuery.query('#personalDetailsTab')[0];
		form.loadRecord(record);
    }
	,loadSiteInfo : function(combo, newValue, oldValue, eOpts)
	 {
	 }
	,loadBuildingInfo : function(combo, newValue, oldValue, eOpts)
	 {
	 }
	,loadbloodgroup : function(combo, newValue, oldValue, eOpts)
	 {
		//console.log(combo);
		//console.log(combo.previousSibling());
	 }
	,loadStateInfo : function(combo, newValue, oldValue, eOpts)
	 {
	 }
	,loadCityInfo : function(combo, newValue, oldValue, eOpts)
	 {
	 }
	,activateExperience : function(btn)
	 {
		var personalDetailsValues = btn.up('form').down('#personalDetailsForm').getValues();
		var commAddressValues = btn.up('form').down('#communicationAddressForm').getValues();
		var contactsValues = btn.up('form').down('#emergencyContactsForm').getValues();
		
		var finalValues = Object.assign(personalDetailsValues, commAddressValues,contactsValues);
		finalValues = btn.up('form').getValues();
		
		Ext.Ajax.request(
		{
		   	 url	 : url + 'employeeInfo'
		   	,method	 : 'POST'
		   	,headers : { 'Content-Type': 'application/json' }
		    ,params	 : { ajax_req: Ext.util.JSON.encode(finalValues) }
		   	,success : function(response)
		   	 {
		   	 }
		   	,failure : function(response)
		   	 {
		   		//alert("Error: " - response.responseText);
		   	 }
		});
		Ext.ComponentQuery.query('#experienceDetails')[0].setDisabled(false).show();
	 }
	,activateAccountDetails : function(currentTab)
	 {
		Ext.ComponentQuery.query('#accountDetails')[0].setDisabled(false).show();
	 }
	,tabChange :  function(a,b,c)
	 {
		//console.log(a);
		//console.log(b);
		//console.log(c);
	 }
	 ,onRemoveClick: function(grid, rowIndex){
	    	var record = grid.getSelectionModel().getSelection()[0]; 
	    	grid.store.remove(record);
	    }
	 ,addDesign : function()
	 {
		 var imgNo = 0;
		 Ext.getCmp('dataView').store.add(Ext.create('Admin.dashboard.model.empManagement.EmpDocumentsModel',{'imageNo':imgNo+1,'productId' : 'A'}));
		 Ext.getCmp('dataView').store.add(Ext.create('Admin.dashboard.model.empManagement.EmpDocumentsModel',{'imageNo':imgNo+2,'productId' : 'B'}));
	 }
});
