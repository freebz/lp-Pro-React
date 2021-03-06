// 예제 A-22. 업데이트된 Greeter.js

import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
