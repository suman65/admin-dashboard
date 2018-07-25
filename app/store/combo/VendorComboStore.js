Ext.define('Admin.dashboard.store.combo.VendorComboStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.vendorcombostore'
    ,autoLoad	: true
    ,fields 	: [{name : "id"},{name : "name"}]
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'comboData?actionType=vendorService'
		,startParam  : 'page'
		,limitParam  : 'size'
		,reader		 : 
		 {
		     type		     : 'json'
		    ,rootProperty    : 'records'
            ,successProperty : 'success'
	     }
	 }
});
