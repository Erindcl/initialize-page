import * as React from 'react';
export default class NoAuth extends React.Component {
  render() {
    return <div className="g-404">
      <div className="content" style={{
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: 128,
          color: '#ddd',
          marginTop: 80
        }}>403</h3>
        <p>访问出错，<a href="#/home">点此</a> 返回</p>
      </div>
    </div>
  }
}
