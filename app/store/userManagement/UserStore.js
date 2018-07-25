Ext.define('Admin.dashboard.store.userManagement.UserStore', 
{
     extend	: 'Ext.data.Store'
    ,alias	: 'store.userstore'
    ,model	: 'Admin.dashboard.model.userManagement.UsersModel'
    ,pageSize: 20
    ,autoLoad: true
    ,proxy 	 : 
     {
		 type		 : 'ajax'
		,url 		 :  url + 'prepaidMeterUser'
		,startParam  : 'page'
		,limitParam  : 'size'
		,reader		 : 
		 {
			 type			 : 'json'
			,rootProperty	 : 'content'
			,successProperty : 'success'
			,totalProperty	 : 'page.totalElements'
		 }
	 }
});
