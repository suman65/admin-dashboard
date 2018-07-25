Ext.define('Admin.dashboard.view.tenantManagement.TenantContainer', 
{
     extend		: 'Ext.container.Container'
    ,xtype		: 'tenantcontainer'
    ,height 	: 500
    ,controller	: 'tenantcontroller'
    ,requires	: 
     [
        'Ext.panel.Panel',
        'Ext.plugin.Responsive',
        'Ext.button.Button',
        'Ext.layout.container.Accordion'
     ]
    ,layout		: 
     {
        type	: 'hbox',
        align	: 'stretch'
     }
    ,padding	: 10
    ,items		: 
     [
         {
            xtype		: 'panel',
            cls			: 'faq-left-sidebar shadow',
            header		: false,
            ui			: 'light',
            scrollable 	: 'y',
            responsiveConfig: 
            {
                'width < 1000': 
                {
                    width	: 0,
                    visible	: false
                },
                'width >= 1000 && width < 1600': 
                {
                    width	: 230,
                    visible	: true
                },
                'width >= 1600': 
                {
                    width	: 300,
                    visible	: true
                }
            },
            items: [
		                {
		                    xtype		: 'panel',
		                    title		: 'Leases Expiring',
		                    ui			: 'light',
		                    cls			: 'shadow pages-faq-container',
		                    iconCls		: 'x-fa fa-lightbulb-o',
		                    bodyPadding : 15,
		                    layout		: 
		                    {
		                        type	: 'vbox',
		                        align	: 'stretch'
		                    },
		                    items		: 
		                    [
		                    	{
		                            xtype: 'dataview',
		                            itemSelector: 'div.lease-expiring-box',
		                            store : {type : 'tenanttemp'},
		                            cls : 'lease-expiring-box-main ',
		                            tpl :  new Ext.XTemplate(
		                            	'<tpl for=".">',
		                                  '<div class="lease-expiring-box">',
		                                   '<div>{name}</div>' ,
		                              	   '<div>{mobileNumber}</div>' ,
		                              	   '<hr>' ,
		                                   '<div>{tenantId}</div>' ,
		                              		'<div>Rent : {rent} </div>' ,
		                              		'<div>Start Date : {startFrom}</div>' ,
		                              		'<div>End Date   : {endDate}</div>' ,
		                              	  '</div>' ,
		                              	 '<br>',
		                            '</tpl>' ,
		                          )
		                        }
		                    ]
		                },
		                {
		                    xtype			: 'panel',
		                    bodyPadding		: 15,
		                    ui				: 'light',
		                    cls				: 'shadow pages-faq-container',
		                    iconCls			: 'x-fa fa-lightbulb-o',
		                    title			: 'Maintanance <br> Payment Due',
		                    layout			: 
		                    {
		                        type	: 'vbox',
		                        align	: 'stretch'
		                    },
		                    items: 
		                    [
		                    	{
		                            xtype: 'dataview',
		                            itemSelector: 'div.maintanace-pay-due-box',
		                            store : {type : 'tenanttemp'},
		                            cls : 'lease-expiring-box-main ',
		                            tpl :  new Ext.XTemplate(
		                            	'<tpl for=".">',
		                                  '<div class="maintanace-pay-due-box">',
		                                   '<div>{name}</div>' ,
		                              	   '<div>{mobileNumber}</div>' ,
		                              	   '<hr>' ,
		                                   '<div>{tenantId}</div>' ,
		                              		'<div>Rent : {rent} </div>' ,
		                              		'<div>Start Date : {startFrom}</div>' ,
		                              		'<div>End Date   : {endDate}</div>' ,
		                              	  '</div>' ,
		                              	 '<br>',
		                            '</tpl>' ,
		                          ),
		                         listeners		: 
		      					{
		      						itemclick: function(view, record, item, index, e, eOpts) 
		      						{
		      							console.log(record);
		      							alert();
		      						}
		      					}
		                        }
		                    ]
		                }
            ],
            plugins: [
                {
                    ptype: 'responsive'
                }
            ]
        },
        {
   		     xtype			: 'customgrid'
   			,flex			: 1
	        ,border  		:  false
	        ,margin 		: 15
	        ,pagination		: true
	        ,title			: 'Tenant Management'
	        ,style   		: 'background-color:#fff;'
	        ,store			:  { type : 'rolesstore'}
            ,height 		: 400
            ,columns		: 
             [
	           	 { text : 'Tenant ID'      ,dataIndex : 'id'		}
	           	,{ text : 'Tenant Name'	 ,dataIndex : 'name'	}
	           	,{ text : 'Mobile Number'	 ,dataIndex : 'name'	}
	           	,{ text : 'Space'	 ,dataIndex : 'name'	}
             ]
            ,tbar :   [
            				{ text    : 'Add'  			,iconCls   : 'x-fa fa-user-plus small-icon'  ,handler : 'addTenant'}
            		  ,'->',{ xtype   : "textfield" 	,emptyText : 'Search by Tanant Id or Name'   ,width   : 250		   }
                   		   ,{ iconCls : 'x-fa fa-search'		}
            		  ]
       }
    ]
});
