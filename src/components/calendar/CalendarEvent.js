import React from 'react'

export const CalendarEvent = ({ event}) => {

    const { title, user } = event;

    return (
        <div>
            <p>{ title }</p>
            <p>- { user.name }</p>
        </div>
    )
}
