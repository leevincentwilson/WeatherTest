import React from 'react';

const withStore = store => Component => function WithProps(props) {
  return (
    <Component
      store={store}
      {...props}
    />
  );
};

export default withStore;
