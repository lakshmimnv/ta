/*
 Sencha Cmd:  TabletApp>sencha generate view sessiondetail.SessionDetail
 */

Ext.define("TabletApp.view.sessiondetail.SessionDetail",{
    extend: "Ext.panel.Panel",
    alias: 'widget.sessiondetail',
    requires: [
        'TabletApp.view.sessiondetail.SessionDetailController',
        'TabletApp.view.sessiondetail.SessionDetailModel'
    ],
    controller: "sessiondetail-sessiondetail",
    viewModel: {
        type: "sessiondetail-sessiondetail"
    },

  //  html: "SessionDetail.js <----> Hello, World!!"

    items: [

        {
            xtype: 'fieldset',
            title: 'Session Information',
            padding: 10,
            items: [
                {
                    fieldLabel: 'Toggle Group',
                    items: [{
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{selectedSessionModel.interestLevel}'
                        },
                        items: [

                            {
                                name:'interestLevel',
                                inputValue: 0,
                                text: 'Not Interested'
                            },
                            {
                                name:'interestLevel',
                                inputValue: 1,
                                text: 'Interested'
                            },
                            {
                                name:'interestLevel',
                                inputValue: 2,
                                text: 'Attending'
                            }
                        ]
                    }]
                }
            ]
        },
        {
            xtype: 'checkboxfield',
            anchor: '100%',
            fieldLabel: 'Approved',
            boxLabel: '',
            bind: {
                value: '{selectedSessionModel.approved}',
                disabled: '{!isAdmin}'
            }
        },
        {
            xtype: 'textfield',
            anchor: '100%',
            fieldLabel: 'Title',
            bind: {
                value: '{selectedSessionModel.title}',
                readOnly: '{!isAdmin}'
            }
        },
        {
            xtype: 'textareafield',
            anchor: '100%',
            fieldLabel: 'Description',
            name: 'description',
            readOnly: true,
            bind: {
                value: '{selectedSessionModel.description}'
            }
        }
    ]
});
