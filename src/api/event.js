import request from '/src/utils/request'

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
  return request('/event')
}

/**
 * get event by id
 * @param {string} id
 * @returns {Promise<Event>}
 */
export function getEventById(id) {
  return request('/event/' + id)
}

/**
 * add event
 * @param {object} data
 * @returns {Promise<Event>}
 */
export function addEvent(data) {
  return request('/event', {
    method: 'POST',
    data,
  })
}

/**
 * update event
 * @param {Event} data
 * @returns {Promise<Event>}
 */
export function updateEvent(data) {
  return request('/event/' + data.id, {
    method: 'PATCH',
    data,
  })
}

/**
 * delete event
 * @param {string} id
 */
export function delEvent(id) {
  return request('/event/' + id, {
    method: 'DELETE',
  })
}
