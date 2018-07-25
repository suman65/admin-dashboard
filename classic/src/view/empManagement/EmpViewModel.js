Ext.define('Admin.dashboard.view.empManagement.EmpViewModel', 
{
     extend	: 'Ext.app.ViewModel'
    ,alias	: 'viewmodel.empviewmodel'
    ,stores	: 
    {
        empAllStore : 
        {
            type	: 'empstore'
        }
    }
});
