import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { FileTextOutlined, PlayCircleOutlined } from '@ant-design/icons'
AutoTranscript.propTypes = {
    subtitles: PropTypes.array,
};

AutoTranscript.defaultProps = {
    subtitles: []
}

function AutoTranscript(props) {
    const { subtitles } = props;

    function handleRoundTime(time) {
        let minute = `0${Math.trunc(time / 1000 / 60)}`.slice(-2);
        let second = `0${Math.trunc(time / 1000 % 60)}`.slice(-2);

        return `${minute}:${second}`


    }






    return (
        <div className="transcript-select_wrapper">
            <div className="transcript-select-header">Auto Transcript&nbsp;<FileTextOutlined /></div>
            <div className="transcript-select">
                <table className="transcript-select_table">

                    <tbody>


                        {
                            subtitles.map((element, index) => (
                                <tr key={index}>
                                    <td>
                                        <button className="transcript-select--button">
                                            <div className="align">
                                                <div className='icon'>
                                                    <PlayCircleOutlined />
                                                </div>
                                                <div>
                                                    &nbsp;{handleRoundTime(element.start)}
                                                </div>
                                            </div>

                                        </button>
                                    </td>
                                    <td>{element.content}</td>
                                </tr>
                            ))
                        }


                    </tbody>




                </table>
            </div>
        </div>
    );
}

export default AutoTranscript;