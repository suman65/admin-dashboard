Ext.define('Admin.dashboard.view.empManagement.EmpTabPanel', 
{
     extend			: 'Ext.TabPanel'
    ,alias			: 'widget.emptabpanel'
    ,floating		: false
    ,tabBarPosition	: 'top'
    ,cls 			: 'x-tabpanel-custom'
    ,controller		: 'empcontroller'
    ,items			: 
    	[
	        {
	             routeId	:  'personalDetails'
	            ,iconCls	:  'x-fa fa-check-circle'
	            ,title		:  'Personal Details'
	            ,layout 	:  {type  : 'vbox'}
	            ,autoScroll :  true
	            ,xtype 		: 'form'
	            ,itemId		: 'personalDetailsTab'
	            ,items 		:  [ {xtype : 'personaldetailsform'},{xtype : 'communicationaddressform'},{xtype : 'emergencycontactsform'}]
	            ,buttons 	:  [ {text : 'Save & Next' ,handler : 'activateExperience' ,formBind : false}]
	        }
	       ,{
	             routeId	: 'experienceDetails'
	            ,iconCls	: 'x-fa fa-check-circle'
	            ,title		: 'Experience Details'
	            ,disabled 	:  true
	            ,itemId		: 'experienceDetails'
	            ,items 		: [{ xtype : 'experiencedetails'}]
	            ,buttons 	:  [ {text : 'Save & Next' ,handler : 'activateAccountDetails'}]
	        }
	       ,{
	             routeId	: 'accountDetails'
	            ,iconCls	: 'x-fa fa-check-circle'
	            ,title		: 'Account Details'
	            ,disabled 	: true
	            ,items 		: [{ xtype : 'empaccountinfoform'}]
	            ,itemId		: 'accountDetails'
	        },
	        {
	            routeId		: 'documentDetails'
	            ,iconCls	: 'x-fa fa-check-circle'
	            ,title		: 'Document Details'
	            ,disabled 	: false
	            ,itemId		: 'documentDetails'
	            ,items		: [{xtype : "empdocuments"}]
	        }
	     ]
    ,listeners : {tabchange : 'tabChange'}
});
