Ext.define('Admin.dashboard.store.combo.CityStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.citystore'
    ,autoLoad	: false
    ,fields 	: [{name : "id"},{name : "name"}]
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'comboData?actionType=cityService'
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
