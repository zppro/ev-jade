/**
 * Created by zppro on 17-12-22.
 */
import { EventEmitter } from 'events'
import nsq from 'nsqjs'
import { uid } from 'rand-token'

class NSQListener extends EventEmitter {
  constructor (topic, {lookupdHTTPAddresses = '127.0.0.1:4161'}) {
    super(topic)
    this._topic = topic
    this._reader = new nsq.Reader(topic, 'test_channel', {
      lookupdHTTPAddresses
    })

    this._msgHandlers = {}

    this._reader.connect()

    this._reader.on('message', msg => {
      console.log('Received message [%s]: %s', msg.id, msg.body.toString())
      const payload = msg.boay.json()
      for (let hid in this._msgHandlers) {
        this._msgHandlers[hid](payload)
      }
      msg.finish()
    })
  }

  _attachHandler (hid, handler) {
    this._msgHandlers[hid] = handler
  }
  _unAttachHandler (hid) {
    delete this._msgHandlers[hid]
  }

  add (handler) {
    let hid = uid(8)
    this._attachHandler(hid, handler)
    return hid
  }

  remove (hid) {
    this._unAttachHandler(hid)
  }
}

export default NSQListener
