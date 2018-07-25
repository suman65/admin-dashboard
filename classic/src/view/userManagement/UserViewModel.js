Ext.define('Admin.dashboard.view.userManagement.UserViewModel', 
{
     extend	: 'Ext.app.ViewModel'
    ,alias	: 'viewmodel.userviewmodel'
    ,stores : 
    {
        allUsersResults: 
        {
            type : 'userstore'
        }
    }
});
