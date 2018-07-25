Ext.define('Admin.dashboard.store.combo.AssetCategoryStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.assetcategorystore'
    ,autoLoad	: true
    ,fields 	: [{name : "id"},{name : "name"}]
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'comboData?actionType=assetCategoryService'
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
