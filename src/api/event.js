/**
 * @typedef {Object} Event
 * @property {string} id
 * @property {string} title
 * @property {string} description
 */

/**
 * get all events
 * @returns {Promise<Event[]>}
 */
export function getEvents() {
  return fetch('/api/event').then((res) => res.json())
}

/**
 * get event by id
 * @param {string} id
 * @returns {Promise<Event>}
 */
export function getEventById(id) {
  return fetch('/api/event/' + id).then((res) => res.json())
}

/**
 * add event
 * @param {object} data
 * @returns {Promise<Event>}
 */
export function addEvent(data) {
  return fetch('/api/event', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

/**
 * update event
 * @param {Event} data
 * @returns {Promise<Event>}
 */
export function updateEvent(data) {
  return fetch('/api/event/' + data.id, {
    method: 'PATCH',
    data: JSON.stringify(data),
  })
}

/**
 * delete event
 * @param {string} id
 */
export function delEvent(id) {
  return fetch('/api/event/' + id, {
    method: 'DELETE',
  })
}
