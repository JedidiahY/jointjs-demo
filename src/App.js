import React, { Component } from 'react';
import './App.css';
import joint from 'jointjs';

class App extends Component {
  componentDidMount() {
    let graph = new joint.dia.Graph;

    let paper = new joint.dia.Paper({
        el: '.App',
        width: '100%',
        height: 600,
        model: graph,
        gridSize: 1,
    });
    
    paper.drawBackground({
      color: '#eee',
    });

    let rect = new joint.shapes.basic.Rect({
        position: { x: 100, y: 30 },
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'green' }, text: { text: '节点1', fill: 'white' } }
    });

    let rect2 = new joint.shapes.basic.Rect({
      position: { x: 600, y: 30 },
      size: { width: 50, height: 30 },
      attrs: { rect: { fill: 'blue' }, text: { text: '节点2', fill: 'white' } }
    });

    let link = new joint.dia.Link({
        source: { id: rect.id },
        target: { id: rect2.id }
    });
    graph.addCells([rect, rect2, link]);
  }
  render() {
    return (
      <div className="main">
        
        <div className="App">jointJs</div> 
        <style jsx>{`
          .App {
            margin-top: 20px;
          }
        `}
        </style>
      </div>
    );
  }
}

export default App;
