import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getItemDataByID } from '../services/fetchData';

export class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: {},
    };
  }

  componentDidMount() {
    this.getItemData();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { itemID: prevPropsItemID },
      },
    } = prevProps;
    const {
      match: {
        params: { itemID },
      },
    } = this.props;
    if (prevPropsItemID !== itemID) {
      this.getItemData();
    }
  }

  getItemData = async () => {
    const {
      match: {
        params: { itemID },
      },
    } = this.props;
    const { data: itemData } = await getItemDataByID(itemID);
    this.setState({ itemData });
  };

  render() {
    console.log(this.state.itemData);
    const {
      itemData: {
        item_id,
        item_name,
        brand_id,
        brand_name,
        nf_calories,
        nf_total_fat,
        nf_saturated_fat,
        nf_cholesterol,
        nf_sodium,
        nf_sugars,
        nf_protein,
      },
    } = this.state;
    return (
      <div key={item_id}>
        <h1>{item_name}</h1>
        <Link to={`/brand/${brand_id}`}>
          <div>Brand : {brand_name}</div>
        </Link>
        <div>Calories: {nf_calories}</div>
        <div>Total fat: {nf_total_fat}</div>
        <div>Saturated fat : {nf_saturated_fat}</div>
        <div>Cholesterol : {nf_cholesterol}</div>
        <div>Sodium : {nf_sodium}</div>
        <div>Sugars : {nf_sugars}</div>
        <div>Proteins: {nf_protein}</div>
      </div>
    );
  }
}
