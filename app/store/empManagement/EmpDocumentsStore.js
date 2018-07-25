Ext.define('Admin.dashboard.store.empManagement.EmpDocumentsStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.empdocumentsstore'
    ,model		: 'Admin.dashboard.model.empManagement.EmpDocumentsModel'
    ,pageSize	: 20
    ,autoLoad	: false
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'empExperienceDetails'
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
