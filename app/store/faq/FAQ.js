Ext.define('Admin.dashboard.store.faq.FAQ', {
    extend: 'Ext.data.Store',
    alias: 'store.faq',

    model: 'Admin.dashboard.model.faq.Category',

    proxy: {
        type: 'api',
        url: '~api/faq/faq'
    }
});
