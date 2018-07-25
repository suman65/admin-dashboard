Ext.define('Admin.dashboard.store.assets.AssetsStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.assetsstore'
    ,model		: 'Admin.dashboard.model.assets.AssetsModel'
    ,pageSize	: 20
    ,autoLoad	: true
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'assetsDetails'
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
