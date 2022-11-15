import React from 'react'
import CardProps from './Carde.type';

// type CardProps = {
//     title: string;
//     body: string;
//     footer?: string;
//     buttonLabel?: string;
//     buttonAction?: Function;

// };

const Card = ({ title, body, footer, buttonLabel, buttonAction }: CardProps) => {
    return (
        <>
        <div className='card-title'>
            {title}
            </div>
            <div className='card-body'>{body}</div>
            {
                footer &&
            <div className='card-footer'>{footer}</div>
            }
            {
                buttonLabel && 
                <button onClick={buttonAction}>{buttonLabel}</button>
            }
        </>
        // <div>Card</div>
    )
}

export default Card;