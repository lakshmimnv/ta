/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TutorialApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'TabletApp',
        isAdmin: true
    },

    stores: {
        sessionListByInterest: {
            model: 'SessionModel',
            autoLoad: true,
            sorters: ['interestCount']
        }
    }/*,

    formulas: {
        currentSession: {
            bind: {
                bindTo: '{sessionListGrid.selection}',
                deep: true
            },
            get: function(session) {
                return session;
            },
            set: function(session) {
                session = this.set('currentSession', session);
            }
        }
    }*/


    //TODO - add data, formulas and/or methods to support your view
});