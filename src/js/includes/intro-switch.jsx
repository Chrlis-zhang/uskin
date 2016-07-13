var React = require('react');
var uskin = require('uskin');
var Switch = uskin.Switch;
var Table = uskin.Table;

function listener(e, status) {
  console.debug('click triggered!', e, status);
}

function displayClose(e) {
  var tarID = e.target.id;
  var display = document.getElementById('s'+tarID).style.display;
  (display === 'none') && (document.getElementById('s'+tarID).style.display = 'block');
  (display === 'block') && (document.getElementById('s'+tarID).style.display = 'none');
}

var column = [{
  title: 'Attributes',
  width: '150px',
  key: "property",
  dataIndex: 'property'
}, {
  title: 'Explanation',
  key: "explain",
  dataIndex: 'explain',
  render: function(col, item, index) {
    return <div style={{wordWrap: 'break-word'}}>{item.explain}</div>;
  }
}, {
  title: 'Type',
  width: '100px',
  key: "type",
  dataIndex: 'type',
}, {
  title: 'Default',
  width: '150px',
  key: "defaultValue",
  dataIndex: 'defaultValue',
}];

var data = [{
  property: 'labelOn',
  explain: 'Set the text show on the labelOn side',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'labelOff',
  explain: 'Set the text show on the labelOff side',
  type: 'String',
  defaultValue: '-',
  id: '2'
}, {
  property: 'disabled',
  explain: 'Set whether Switch is able to click or not',
  type: 'Boolean',
  defaultValue: 'false',
  id: '3'
}, {
  property: 'width',
  explain: 'Set Switch width',
  type: 'String',
  defaultValue: '-',
  id: '4'
}, {
  property: 'checked',
  explain: 'Set Switch at on side or off side',
  type: 'Boolean',
  defaultValue: 'false',
  id: '5'
}, {
  property: 'onChange',
  explain: 'change事件的handler',
  type: 'Function',
  defaultValue: '-',
  id: '6'
}];

class IntroSwitch extends React.Component{
  render(){
    return (
      <div>
        <article>
          <h1>Switch</h1>
          <p>Turn a switch to change the state and trigger an event.</p>
        </article>
        <div>
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Switch onChange={listener} labelOn="ON" labelOff="OFF" checked={true} />
                <Switch onChange={listener} labelOn="ON" labelOff="OFF" checked={false} />
              </div>
              <div>
                <p className="title">Default Switch</p>
                <p className="content">Config attributes labelOn, labelOff, checked to initialize the Switch</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Switch = uskin.Switch;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} labelOn="ON" labelOff="OFF" checked=&#123;true} /><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} labelOn="ON" labelOff="OFF" checked=&#123;false} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Switch onChange={listener} labelOn="ON" labelOff="OFF" checked={true} disabled={false} />
                <Switch onChange={listener} labelOn="ON" labelOff="OFF" disabled={true} />
              </div>
              <div>
                <p className="title">Disabled Switch</p>
                <p className="content">Set disabled "true" to make it unable to click Switch</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Switch = uskin.Switch;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} labelOn="ON" labelOff="OFF" checked=&#123;true} disabled=&#123;false} /><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} labelOn="ON" labelOff="OFF" disabled=&#123;true} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <Switch onChange={listener} disabled={false} width={45} />
                <Switch onChange={listener} disabled={false} width={70} />
              </div>
              <div>
                <p className="title">Width of Switch</p>
                <p className="content">Set width of Switch</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                     var Switch = uskin.Switch;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} disabled=&#123;false} width=&#123;45} /><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} disabled=&#123;false} width=&#123;70} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="api">
            <h4>Attributes</h4>
            <div>
              <Table
                width="90%"
                column={column}
                data={data}
                dataKey={'id'}
                checkbox={false}
                striped={false}
                hover={false}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = IntroSwitch;