// 예제 4-16. DragSource의 타입 매개변수로 상수를 전달하도록 수정한 Snack 컴포넌트

import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import constants from './constants';

// snack 드래그 앤드 드롭 사양
//
// - 필수: beginDrag
// - 선택: endDrag
// - 선택: canDrag
// - 선택: isDragging
const snackSpec = {
    beginDrag(props) {
	return {
	    name: props.name
	};
    },

    endDrag(props, monitor) {
	const dragItem = monitor.getItem();
	const dropResult = monitor.getDropResult();

	if (dropResult) {
	    console.log(`You dropped ${dragItem.name} into ${dropResult.name}`);
	}
    }
};

// Snack DragSource collect 콜렉팅 함수
// - connect: DragSourceConnector의 인스턴스
// 드래그 원본 역활을 DOM 노드에 할당하는 데 이용한다.
//
// - monitor: DragSourceMonitor의 인스턴스
// 리액트 DnD에서 속성으로 컴포넌트의 상태를 연결하는 데 이용한다.
// 상태를 얻는 데 이용할 수 있는 함수로 canDrag(), isDragging(),
// getItemType(), getItem(), didDrop() 등이 있다.
let collect = (connect, monitor) => {
    return {
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
    };
}

class Snack extends Component {
    render() {
	const { name, isDragging, connectDragSource } = this.props;
	const opacity = isDragging ? 0.4 : 1;

	const style = {
	    opacity: opacity
	};

	return (
	    connectDragSource(
		<div className='snack' style={style}>
		    {name}
		</div>
	    )
	);
    }
}
Snack.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequred
};

export default DragSource(constants.SNACK, snackSpec, collect)(Snack);
