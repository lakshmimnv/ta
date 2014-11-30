/*
 Sencha Cmd:  TabletApp>sencha generate view sessionlist.SessionList
 */
Ext.define("TabletApp.view.sessionlist.SessionList",{
//    extend: "Ext.panel.Panel",
    extend: "Ext.grid.Panel",
    alias: 'widget.sessionlist',
    requires: [
        'TabletApp.view.sessionlist.SessionListController'
  //      'TabletApp.view.sessionlist.SessionListModel'
    ],
    controller: "sessionlist-sessionlist",
  //  viewModel: {
  //      type: "sessionlist-sessionlist"
  //  },

  /*  store: {
        model: 'SessionModel',
        autoLoad: true
    },
*/
    listeners: {
        refreshdata: 'onGridStoreRefresh',
        scope: 'controller'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'refresh',
/*
                    handler: function(button){
                        var store= button.up().up().getStore();
                        store.load();
                    }
*/
                    handler: function(button){
                        var grid= button.up().up();
                        grid.fireEvent('refreshdata', grid);
                    }

                }
            ]
        }
    ],
    bind: {
        store: '{sessionListByInterest}',
        selection: '{selectedSessionModel}'
    },
    reference: 'sessionListGrid',
    columns: [
        {
            header: 'Id',
            dataIndex: 'id'
        },
        {
            header: 'Approved',
            dataIndex: 'approved'
        },
        {
            header: 'Interest Level',
            dataIndex: 'interestLevel'
        },
        {
            header: 'Interest',
            dataIndex: 'interestLevel',
            xtype: 'widgetcolumn',
            width: 300,
            widget: {
                xtype: 'segmentedbutton',
                defaultBindProperty: 'value',
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
                ],
                listeners: {
                    toggle: function(segmentedButton, value) {
                        var rec = segmentedButton.getWidgetRecord();
                        if(rec) {
                            rec.set('interestLevel', segmentedButton.getValue());
                        }
                    }
                }
            }

        },
        {
            header: 'Interest Level',
            width: '200',
            renderer: function(value, metaData, record, row, col, store, grid) {
                var level = record.get("interestLevel");
                if(level === 0){
                    return "Not Interested"
                } else if (level === 1) {
                    return "Interested"
                } else {
                    return "Attending"
                }
            }
        },
        {
            header: 'Interest Count',
            dataIndex: 'interestCount'
        },
        {
            header: 'Title',
            dataIndex: 'title',
            flex: 1
        }
    ]

  //  html: "SessionList <-------> Hello, World!!"
});
