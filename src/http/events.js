import axios from 'axios';

export const getAllEvents = async () => {
    let {data} = await axios.get('../events.json');
    return data
}

export const getOneEvent = async (eventId) => {
    let {data} = await axios.get('../events.json');
    let event = data.find(
        ({id}) => id == eventId
        )
    return event
}