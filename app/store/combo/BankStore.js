Ext.define('Admin.dashboard.store.combo.BankStore', 
{
     extend		: 'Ext.data.Store'
    ,alias		: 'store.bankstore'
    ,autoLoad	: true
    ,fields 	: [{name : "id"},{name : "name"}]
    ,proxy 		: 
     {
		 type		 : 'ajax'
		,url 	     :  url + 'comboData?actionType=bankService'
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
