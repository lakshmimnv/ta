/* Sencha Cmd:
   TabletApp>sencha generate model -n SessionModel
                                   -b TabletApp .model.Base
                                   -f title,description,interestCount,interestLevel,approved,roomCapacity
*/

Ext.define('TabletApp.model.SessionModel', {
    extend: 'TabletApp.model.Base',
    requires: [
        'TabletApp.model.Base'
    ],
    fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'interestCount', type: 'int' },
        { name: 'interestLevel', type: 'int' },
        { name: 'approved', type: 'bool' },
        { name: 'roomCapacity', type: 'int' }

    ],

    schema: {
        namespace: 'TabletApp.model',
        proxy: {
            type: 'rest',
            url: 'sessions.json',
            reader: {
                type: 'json',
                rootProperty: 'data1'
            }
        }
    }


});

