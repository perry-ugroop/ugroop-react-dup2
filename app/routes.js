// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';
import { Route } from 'react-router';
import React from 'react';
import { HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  const dynamicLoadAddTour = (nextState, cb) => {
    const importModules = Promise.all([
      System.import('containers/UGAddTourPage/reducer'),
      System.import('containers/UGAddTourPage'),
    ]);
    const renderRoute = loadModule(cb);
    importModules.then(([reducer, component]) => {
      injectReducer('addATour', reducer.default);
      renderRoute(component);
    });
    importModules.catch(errorLoading);
  };
  return ([
    <HomeRoute
      path={'/'}
      name={'home'}
      key={'home'}
      getComponent={(nextState, cb) => {
        System.import('containers/UGHomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      }}
    />,
    <Route
      path={'/features'}
      name={'features'}
      key={'features'}
      getComponent={(nextState, cb) => {
        System.import('containers/UGFeaturePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      }}
    />,
    <Route
      path={'/blog'}
      name={'blog'}
      key={'blog'}
      getComponent={(nextState, cb) => {
        System.import('containers/UGBlogPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      }}
    />,
    <Route
      path={'/pricing'}
      name={'pricing'}
      key={'pricing'}
      getComponent={(nextState, cb) => {
        System.import('containers/UGPricingPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      }}
    />,
    <Route
      path={'/contacts'}
      name={'contacts'}
      key={'contacts'}
      getComponent={(nextState, cb) => {
        System.import('containers/UGContactsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      }}
    />,
    <Route
      path={'/faq'}
      name={'faq'}
      key={'faq'}
      getComponent={(nextState, cb) => {
        System.import('containers/UGFaqPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      }}
    />,
    <AuthenticatedRoute key={'authRoute'}>
      <HomeRoute
        path={'/addTour'}
        key={'addTour'}
        name={'addTour'}
        getComponent={dynamicLoadAddTour}
      />
      <Route
        path={'/addTour'}
        name={'addTour'}
        key={'addTour'}
        getComponent={dynamicLoadAddTour}
      />,
    </AuthenticatedRoute>,
    <Route
      path={'/forgetpassword'}
      name={'forgetpassword'}
      key={'forgetpassword'}
      getComponent={(nextState, cb) => {
        const importModules = Promise.all([
          System.import('containers/UGForgetPasswordPage/reducer'),
          System.import('containers/UGForgetPasswordPage'),
        ]);
        const renderRoute = loadModule(cb);
        importModules.then(([reducer, component]) => {
          injectReducer('forgetpassword', reducer.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      }}
    />,
    <LoginRoute
      path={'/login'}
      name={'login'}
      key={'login'}
      getComponent={(nextState, cb) => {
        const importModules = Promise.all([
          System.import('containers/UGLoginPage/reducer'),
          System.import('containers/UGLoginPage/sagas'),
          System.import('containers/UGLoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }}
    />,

    <Route
      path={'/tour'}
      name={'tour'}
      key={'tour'}
      getComponent={(nextState, cb) => {
        const importModules = Promise.all([
          System.import('containers/UGTourPage/reducer'),
          System.import('containers/UGTourPage'),
        ]);
        const renderRoute = loadModule(cb);
        importModules.then(([reducer, component]) => {
          injectReducer('tourlist', reducer.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      }}
    />,
    <Route
      path={'/registration'}
      name={'registration'}
      key={'registration'}
      getComponent={(nextState, cb) => {
        const importModules = Promise.all([
          System.import('containers/UGRegisterPage/reducer'),
          System.import('containers/UGRegisterPage/sagas'),
          System.import('containers/UGRegisterPage'),
        ]);
        const renderRoute = loadModule(cb);
        importModules.then(([reducer, sagas, component]) => {
          injectReducer('register', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      }}
    />,
    <Route
      path={'/verify'}
      name={'verify'}
      key={'verify'}
      getComponent={(nextState, cb) => {
        const importModules = Promise.all([
          System.import('containers/UGVerifyEmailPage'),
        ]);
        const renderRoute = loadModule(cb);
        importModules.then(([component]) => {
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      }}
    />,
    <Route
      path={'*'}
      name={'notfound'}
      key={'notfound'}
      getComponent={(nextState, cb) => {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      }}
    />,
  ]);
}
