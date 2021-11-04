import React from 'react';
import { Navbar } from '../ui/Navbar';
import {Calendar , momentLocalizer  } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'
import { messages } from '../../helpers/calendar-messages-espannol';
import { CalendarEvent } from './CalendarEvent';

import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es')

const localizer = momentLocalizer(moment);

const events = [{
    title : 'Calendario Tennis',
    start : moment().toDate(),
    end : moment().add( 2 , 'hours').toDate(),
    bgcolor : '#f39c12',
    notes : 'hacer CRUD',
    user : {
        _id : '123',
        name : 'Whanderley'
    }
}]

export const CalendarScreen = () => {

    const onDoubleClick = (e) => {
        console.log(e)
    }

    const eventsStyleGetter = ( event, start, end , isSelected ) => { 
        const style = {
            backgroundColor: '#f39c12',
            boderRaduis: '0px',
            opacity: 0.8, 
            display: 'block',
            color: 'white'
        }

        return {
                style
            }
    }
    
    return (
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              messages= { messages}
              eventPropGetter = {eventsStyleGetter}
              onDoubleClickEvent={onDoubleClick}
              components= {{
                  event: CalendarEvent
              }}
            />
        </div>
    )
}
