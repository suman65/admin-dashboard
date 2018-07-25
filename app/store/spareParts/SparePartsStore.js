Ext.define('Admin.dashboard.store.spareParts.SparePartsStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.sparepartsstore'
    ,model		: 'Admin.dashboard.model.spareParts.SparePartsModel'
    ,pageSize	: 20
    ,autoLoad	: true
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'spareParts'
		,startParam  : 'page'
		,limitParam  : 'size'
		,reader		 : 
		 {
		     type		     : 'json'
		    ,rootProperty    : 'content'
            ,successProperty : 'success'
		    ,totalProperty   : 'page.totalElements'
	     }
	 }
});
