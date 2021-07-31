import { connect } from 'react-redux';

import { Sidebar } from './Sidebar';

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
