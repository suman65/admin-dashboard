Ext.define('Admin.dashboard.store.combo.VendorCategoryStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.vendorcategorystore'
    ,autoLoad	: true
    ,fields 	: [{name : "id"},{name : "name"}]
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'comboData?actionType=vendorCategoryService'
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
