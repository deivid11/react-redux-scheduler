import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'scheduler',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Scheduler = require('./containers/SchedulerContainer').default
      const reducer = require('./reducers/scheduler').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'scheduler', reducer })

      /*  Return getComponent   */
      cb(null, Scheduler)


    /* Webpack named bundle   */
    }, 'scheduler')
  }
})
