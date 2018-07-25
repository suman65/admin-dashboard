Ext.define('Admin.dashboard.model.ChatMessages', {
    extend: 'Admin.dashboard.model.Base',

    fields: [
        {
            type: 'string',
            name: 'message'
        },
        {
            type: 'string',
            defaultValue: 'user',
            name: 'sender'
        }
    ]
});
