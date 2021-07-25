import React from 'react';
import PropTypes from 'prop-types';

BlockLevel.propTypes = {
    level: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

BlockLevel.defaultProps = {
    level: '',
    height: '25',
    width: '25',
};



function BlockLevel(props) {
    const { level, height, width } = props;

    let from, to;
    if (level === "1") {
        from = '#ffcc00';
        to = '#ffcc00';
    } else if (level === '2') {
        from = '#faa918';
        to = '#faa918';
    }
    else if (level === '3') {
        from = '#8ee000';
        to = '#8ee000';
    }
    else if (level === '4') {
        from = '#8ee000';
        to = '#8ee000';
    }
    else if (level === '5') {
        from = '#3ecffa';
        to = '#1da1f2';
    }
    else if (level === '6') {
        from = '#3ecffa';
        to = '#1da1f2';
    }
    else {
        from = '#e53838';
        to = '#e5388e';
    }




    const style = {
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(to top,${from},${to})`,
        borderRadius: ".3125rem",
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'


    }


    return (
        <div className='block_level' style={style}>
            <div className='block_text'>{level}</div>

        </div>
    );
}

export default BlockLevel;