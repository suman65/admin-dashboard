Ext.define('Admin.dashboard.view.tenantManagement.TenantTabPanel', 
{
     extend			: 'Ext.tab.Panel'
    ,alias			: 'widget.tenanttabpanel'
    ,floating		: false
    ,tabBarPosition	: 'top'
    ,cls 			: 'x-tabpanel-custom'
    ,controller		: 'tenantcontroller'
    ,items			: 
    	[
	        {
	             routeId	:  'tenantPersonalDetails'
	            ,iconCls	:  'x-fa fa-check-circle'
	            ,title		:  'Personal Details'
	            ,layout 	:  {type  : 'vbox'}
	            ,autoScroll :  true
	            ,xtype 		: 'form'
	            ,items 		:  [ {xtype : 'tenantpersonaldetailsform'}]
	            ,buttons 	:  [ {text : 'Save & Next' ,handler : 'activateLeaseDetails' ,formBind : false}]
	        }
	       ,{
	             routeId	: 'tenantLeaseDetails'
	            ,iconCls	: 'x-fa fa-check-circle'
	            ,title		: 'Lease Details'
	            ,disabled 	:  true
	            ,xtype		: 'form'
	            ,itemId		: 'tenantLeaseDetails'
	            ,items 		:  [{ xtype : 'tenantleaseform'}]
	            ,buttons 	:  [{ text : 'Save & Next' ,handler : 'activateTenantAccountDetails'}]
	        }
	       ,{
	             routeId	: 'tenantAccountDetails'
	            ,iconCls	: 'x-fa fa-check-circle'
	            ,title		: 'Account Details'
	            ,disabled 	: true
	            ,items 		: [{ xtype : 'tenantaccountdetailsform'}]
	            ,itemId		: 'tenantAccountDetails'
	            ,buttons 	:  [{ text : 'Save & Next' ,handler : 'activateDocumentDetails'}]
	        },
	        {
	            routeId		: 'tenantDocumentDetails'
	            ,iconCls	: 'x-fa fa-check-circle'
	            ,title		: 'Document Details'
	            ,disabled 	: true
	            ,itemId		: 'tenantDocumentDetails'
	        }
	     ]
});
