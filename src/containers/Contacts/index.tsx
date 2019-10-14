import React, { PureComponent, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import CustomTable from "../../components/core-libs/Table";
import SearchBar from "../../components/core-libs/SearchBar";

import { getContactInformationList } from "../../actions/contacts";
export interface UserDetailsList {
  id: number;
  fName: string;
  lName: string;
  emailId: string;
  phNumber: string;
}

const columns: string[] = [
  "First Name",
  "Middle Name",
  "Email ID",
  "Phone Number"
];

const styles = {
  filterWrapper: {
    display: "flex"
  },
  searchWrapper: {
    marginRight: "20px",
    width: "100%"
  }
};

export class Contacts extends PureComponent<any, any> {
  state = {
    filterText: ""
  };
  componentDidMount() {
    this.props.getContactInformationList();
  }
  onChange = (e: any) => {
    this.setState({ filterText: e.target.value });
  };
  getRows = (
    list: UserDetailsList[],
    filterText: string
  ): UserDetailsList[] => {
    if (filterText) {
      console.log("filterText", filterText, "list", list);
      return list.filter((i: UserDetailsList) => {
        return (
          i.fName.includes(filterText) ||
          i.lName.includes(filterText) ||
          i.emailId.includes(filterText) ||
          i.phNumber.includes(filterText)
        );
      });
    }
    return list;
  };
  render() {
    const { classes, contact } = this.props;
    const { filterText } = this.state;
    const contactList = this.getRows(contact.contactList, filterText);
    return (
      <Fragment>
        <div className={classes.filterWrapper}>
          <div className={classes.searchWrapper}>
            <SearchBar onChange={this.onChange} />
          </div>
        </div>
        {contactList && <CustomTable columns={columns} rows={contactList} />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    contact: state.contact
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getContactInformationList }, dispatch);

export const ContactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Contacts));
