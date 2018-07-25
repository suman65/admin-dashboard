Ext.define('Admin.dashboard.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationTree',
    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            /*{
                text: 'Email',
                iconCls: 'x-fa fa-send',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'email',
                leaf: true
            },*/
            {
                text: 'User Management',
                iconCls: 'x-fa fa-user',
                rowCls: 'nav-tree-badge',
                viewType: 'userdetails',
                leaf: true
            },
            {
                text: 'Employee Management',
                iconCls: 'x-fa fa-user',
                rowCls: 'nav-tree-badge',
                viewType: 'employeedetails',
                leaf: true
            },
            {
                text: 'Tenant Management',
                iconCls: 'x-fa fa-user',
                rowCls: 'nav-tree-badge',
                viewType: 'tenantcontainer',
                leaf: true
            },
            {
                text: 'Management Services',
                iconCls: 'x-fa fa-cogs',
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Vendors',
                        iconCls: 'x-fa fa-vimeo',
                        viewType: 'vendorinfoview',
                        leaf: true
                    }
                   ,{
                        text: 'Assets',
                        iconCls: 'x-fa fa-vimeo',
                        viewType: 'assetsinfoview',
                        leaf: true
                    }
                   ,{
                       text: 'Spare Parts',
                       iconCls: 'x-fa fa-file-o',
                       viewType: 'sparepartsview',
                       leaf: true
                   }
                ]
            },
            {
                text: 'Profile',
                iconCls: 'x-fa fa-user',
                viewType: 'profile',
                leaf: true
            },
            {
                text: 'Search results',
                iconCls: 'x-fa fa-search',
                viewType: 'searchresults',
                leaf: true
            },
            /*{
                text: 'FAQ',
                iconCls: 'x-fa fa-question',
                viewType: 'faq',
                leaf: true
            },*/
           /* {
                text: 'Pages',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [
                    {
                        text: 'Blank Page',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    },

                    {
                        text: '404 Error',
                        iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    },
                    {
                        text: '500 Error',
                        iconCls: 'x-fa fa-times-circle',
                        viewType: 'page500',
                        leaf: true
                    },
                    {
                        text: 'Lock Screen',
                        iconCls: 'x-fa fa-lock',
                        viewType: 'lockscreen',
                        leaf: true
                    },

                    {
                        text: 'Login',
                        iconCls: 'x-fa fa-check',
                        viewType: 'login',
                        leaf: true
                    },
                    {
                        text: 'Register',
                        iconCls: 'x-fa fa-pencil-square-o',
                        viewType: 'register',
                        leaf: true
                    },
                    {
                        text: 'Password Reset',
                        iconCls: 'x-fa fa-lightbulb-o',
                        viewType: 'passwordreset',
                        leaf: true
                    }
                ]
            },*/
            /* {
                text: 'Widgets',
                iconCls: 'x-fa fa-flask',
                viewType: 'widgets',
                leaf: true
            },
            {
                text: 'Forms',
                iconCls: 'x-fa fa-edit',
                viewType: 'forms',
                leaf: true
            },
            {
                text: 'Charts',
                iconCls: 'x-fa fa-pie-chart',
                viewType: 'charts',
                leaf: true
            }*/
        ]
    }
});
