Ext.define('Admin.dashboard.model.Subscription', {
    extend: 'Admin.dashboard.model.Base',

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'string',
            name: 'subscription'
        }
    ]
});
