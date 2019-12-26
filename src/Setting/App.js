import React, { Component } from 'react'
import { Card } from 'antd';
import './css/setting.css'
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default class App extends Component {
  render() {
    return (
        
      <div id="wrap">
        <div className="header">
          <Card className="details" title="Card Title">
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              Content
            </Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
        </div>
      </div>
    )
  }
}
