Ext.define('Admin.dashboard.model.faq.Category', {
    extend: 'Admin.dashboard.model.Base',

    fields: [
        {
            type: 'string',
            name: 'name'
        }
    ],

    hasMany: {
        name: 'questions',
        model: 'faq.Question'
    }
});
