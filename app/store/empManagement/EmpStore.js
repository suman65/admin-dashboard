Ext.define('Admin.dashboard.store.empManagement.EmpStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.empstore'
    ,model		: 'Admin.dashboard.model.empManagement.EmpModel'
    ,pageSize	: 20
    ,autoLoad	: true
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'empDetails'
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
