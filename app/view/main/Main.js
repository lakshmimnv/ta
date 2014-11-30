/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TabletApp.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
       // 'TutorialApp.view.main.MainController',
       // 'TutorialApp.view.main.MainModel'
        'TabletApp.view.sessiondetail.SessionDetail',
        'TabletApp.view.sessionlist.SessionList'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'sessionlist',
//        bind: {
  //          title: '{name}'
    //    },
        region: 'center',
        flex: 5,
        items:[{
            title: 'sessionlist Tab 1',
            html: '<h2>Content appropriate for sessionlist.</h2>'
        }]
      //  width: 250,
      //  split: true,
      //  tbar: [{
       //     text: 'Button',
        //    handler: 'onClickButton'
       // }]
    },{
        region: 'east',
        xtype: 'sessiondetail',
        split: true,
        flex: 2/*,
        items:[{
            title: 'sessiondetail Tab 1'*//*,
            html: '<h2>Content appropriate for sessiondetail.</h2>'*//*
        }]*/
    }
    ]
});
