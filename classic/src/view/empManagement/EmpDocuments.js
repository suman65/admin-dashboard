Ext.define('Admin.dashboard.view.empManagement.EmpDocuments', 
{
     extend			:  'Ext.view.View'
    ,alias			:  'widget.empdocuments'
    ,cls 			:  'x-tabpanel-custom'
    ,controller		:  'empcontroller'
    ,store			: 	{type : 'empdocumentsstore'}
	,overClass		: 	'over'
	,singleSelect	: 	true
	,autoWidth		: 	true
	,autoHeight		: 	true
	,itemSelector	: 	'div.template'
	,overItemCls 	: 	'template-hover'
	,id				:   'dataView'
	,autoScroll  	: 	 true
	,tpl			:    new Ext.XTemplate
	(
			'<tpl for=".">'
			,'<div class="template" >'
			,'<img width="170" height="170" align=center src="showImage.htm?productId={productId}&imageNo={imageNo}&imageType=PRIMARY&t={timestamp}" />'
			,'</div>'
			,'</tpl>'
			,'<div class=addImage><b>ADD</b>  </div>'
	)
	,listeners: {
		click: {
	        element: 'el',
	        fn: function(e, t) 
	        {
	        	if (Ext.get(t).hasCls('addImage')) 
	        	{
	        		 var imgNo = 0;
	 	            Ext.getCmp('dataView').store.add(Ext.create('Admin.dashboard.model.empManagement.EmpDocumentsModel',{'imageNo':imgNo+1,'productId' : 'A'}));
	            }
	        }
	    }
    }
});
