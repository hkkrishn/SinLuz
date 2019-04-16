import { MAP_DETAIL } from "./types";
import axios from 'axios';

const mapDetails = [
  {
    id: "1",
    title: "Outage in Caracas",
    date: "2018-03-21",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Caracas, Venezuela",
    venue: "Av. Nte. 10, Caracas 1012, Distrito Capital, Venezuela",
    venueLatLng: {
      lat: 10.5,
      lng: -66.916664
    },
    hostedBy: "Nicolas Maduro",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Nicolas",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
];
export const getMapDetails = () => async dispatch => {
  const res = await axios.get('https://lucero.herokuapp.com/apagon');
  const smallres = res.data.data.slice(0,15)
  console.log(smallres)
  return dispatch({ type: MAP_DETAIL, payload: smallres });
};

