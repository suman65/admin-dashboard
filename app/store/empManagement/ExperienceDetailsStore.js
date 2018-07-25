Ext.define('Admin.dashboard.store.empManagement.ExperienceDetailsStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.experiencedetailsstore'
    ,model		: 'Admin.dashboard.model.empManagement.ExperienceDetailsModel'
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
